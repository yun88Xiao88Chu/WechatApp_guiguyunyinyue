// pages/recommendSong/recommendSong.js
import PubSub from 'pubsub-js'
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day:'',
    month:'',
    recommendList:[],
    musicIndex:0, //歌曲当前下标位置
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.setData({
      day: new Date().getDate(),
      month: new Date().getMonth() + 1
    })

    let recommendListData = await request('recommend/songs')
    this.setData({
      recommendList:recommendListData.recommend
    })

    //订阅song页面发布的上一首下一首的消息
    PubSub.subscribe('switchType',(_,switchType)=>{
      let {musicIndex,recommendList} = this.data;
       if(switchType === 'pre'){
         (musicIndex === 0) && (musicIndex = recommendList.length)
          musicIndex -= 1;
       }else{
         (musicIndex === recommendList.length-1) && (musicIndex = -1)
          musicIndex += 1;
       }

       //更新musicIndex的状态数据
       this.setData({
         musicIndex
       })

       //根据计算之后的musicIndex获取音乐对象的id
       let musicId = recommendList[musicIndex].id;
       //将音乐id发送给song页面
       PubSub.publish('musicId',musicId)
    })
  },

  toSong(event){
    let {id,index} = event.currentTarget.dataset;

    this.setData({
      musicIndex:index
    })
    
    wx.navigateTo({
      url:`/songs/pages/song/song?musicId=${id}`,
    })
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