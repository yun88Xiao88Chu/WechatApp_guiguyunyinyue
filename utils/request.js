//封装发送请求的函数
/*
* 封装核心思想
*   1. 封装的目的： 实现复用，简化代码
*   2. 封住函数
*     1) 函数内部保留固定不变的代码段(公共代码)
*     2) 将动态的数据提取成函数的形参
*     3) 谁调用谁动态传入实参
*
*   3. 封装组件
*     1) 组件内部保留固定不变的代码段(公共代码)
*     2) 将动态的数据提取成props属性
*     3) 谁使用组件，谁通过标签属性将数据动态导入到组件内部的props对象中
*
* */
import config from './config.js'

export default (url,data={},method='GET') => {
  return new Promise((resolve,reject)=>{
    wx.request({
      // url: config.host + url,
      url:config.mobileHost + url,
      data,
      method,
      success:(res)=>{
        // console.log(res);
        //更新data中bannerList的数据
        resolve(res.data)
      },
      fail:(error)=>{
        reject(error)
      }
    })     
  })
}