// pages/index/index.js
import request from '../../utils/request.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],
    recommenedList:[], //推荐数据
    topList:[]  //排行榜数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    //获取banner数据
    let bannerListData = await request('banner',{type:2})
    this.setData({
      bannerList:bannerListData.banners
    })

    //获取推荐数据
    let recommenedListData = await request('personalized')
    // console.log(recommenedListData)
    this.setData({
      recommenedList:recommenedListData.result
    })
    
    //获取排行榜的数据
    let idx = [0,1,2,3]; //取排行榜的参数
    let index = 0; //指针
    let topListArr = [];
    while(index < idx.length){
      let topListResult = await request(`top/list?idx=${index++}`)
      let topListObj = {name:topListResult.playlist.name,tracks:topListResult.playlist.tracks.slice(0,3)}
      topListArr.push(topListObj)
      this.setData({topList:topListArr})
    }
    
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