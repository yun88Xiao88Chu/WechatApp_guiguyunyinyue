// pages/song/song.js

import PubSub from 'pubsub-js'
import moment from 'moment'
import request from '../../../utils/request'
const appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay:false, //音乐是否播放,默认未播放
    song:[], //音乐的详情信息
    musicId:'', //音乐的id标识
    musicLink:'',//当前播放音乐的链接
    currentTimeFormat:'00:00',  //音乐播放的实时进度时间
    durationTimeFormat:'00:00',//音乐播放的总时长
    currentWidth: 0, //进度条的实时宽度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // @todo 发请求获取音乐详情,根据musicId
    let musicId = options.musicId;

    //根据id发请求获取音乐详情
    this.getMusicInfoById(musicId);
    
    //生成控制背景音乐播放的实例
    this.backgroundAudioManager =  wx.getBackgroundAudioManager();
    this.backgroundAudioManager.onTimeUpdate(()=>{
      if(musicId !== appInstance.globalData.musicId){
         return(
           this.setData({
            currentTimeFormat:'00:00',
            currentWidth:0
           })
         )
      }
      this.setData({
        currentTimeFormat:moment(this.backgroundAudioManager.currentTime*1000).format('mm:ss'),
        currentWidth: this.backgroundAudioManager.currentTime / this.backgroundAudioManager.duration * 450
      })
    })

    //判断当前页面音乐是否在播放
    if(appInstance.globalData.isMusicPlay && appInstance.globalData.musicId == musicId){ 
        this.setData({
          isPlay:true
        })
    }


    //监听音乐播放/暂停/停止 用于使得页面的播放状态同实际音乐的播放状态保持一致
    wx.onBackgroundAudioPlay(()=>{
      this.changeMusicPlay(true)
    })
    wx.onBackgroundAudioPause(()=>{
      this.changeMusicPlay(false)
    })
    wx.onBackgroundAudioStop(()=>{
      this.changeMusicPlay(false)
    })

    //TODO 监听音乐播放结束
    this.backgroundAudioManager.onEnded(()=>{
       this.setData({
         currentWidth:0,
         currentTimeFormat: '00:00'
       })
       PubSub.publish('switchType','next');
    })

    //TODO 订阅recommend 发送的musicId消息
    PubSub.subscribe('musicId',(_,musicId)=>{
      //根据id发请求获取音乐详情
      this.getMusicInfoById(musicId);
      //自动播放
      this.musicControl(true,musicId);
    })
    
  },
  //封装修改状态的功能函数
  changeMusicPlay(isPlay){
    this.setData({
      isPlay
    })
    appInstance.globalData.isMusicPlay = isPlay;
  },

  //封装根据musicId获取音乐详情的方法
  async getMusicInfoById(musicId){
    let songData = await request('song/detail',{ids:musicId})
    let durationTimeFormat = moment(songData.songs[0].dt).format('mm:ss')
    this.setData({
      song:songData.songs[0],
      musicId,
      durationTimeFormat
    })
    
    //动态修改窗口标题
    wx.setNavigationBarTitle({
      title:this.data.song.name
    })
  },

  //点击播放/暂停的回调
  handlePlay(){
    let isPlay =  !this.data.isPlay;
    this.setData({
      isPlay
    })
    let {musicId,musicLink} = this.data;
    this.musicControl(isPlay,musicId,musicLink);
  },
  //控制音乐播放/暂停
 async musicControl(isPlay,musicId,musicLink){
    //1.播放  
  if(isPlay){
      if(!musicLink){
        let musicLinkData =  await request('song/url',{id:musicId})
        this.setData({
          musicLink: musicLinkData.data[0].url
        })
        //播放音乐
        this.backgroundAudioManager.src = this.data.musicLink;
        this.backgroundAudioManager.title = this.data.song.name;

        appInstance.globalData.musicId = musicId
      }else{
        this.backgroundAudioManager.play();
      }
    }else{
     //暂停 
      this.backgroundAudioManager.pause();
      appInstance.globalData.isMusicPlay = false
      this.setData({
        currentWidth:0,
        currentTimeFormat: '00:00'
      })
    }
  },
  //切换歌曲
  switchSong(event){
    let type = event.currentTarget.id;
    // console.log(type)
    //停止当前音乐的播放
    this.backgroundAudioManager.stop();    
    PubSub.publish('switchType',type)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})