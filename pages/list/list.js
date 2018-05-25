// pages/list/list.js
let datas =require('../../datas/list-data')
console.log('datas')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  listArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //更新数据
    this.setData({
      listArr:datas.list_data
    })
  },

  toDetail(event){
    let index = event.currentTarget.dataset.index;
    console.log(index)
    wx.navigateTo({
      url:'/pages/detail/detail?index='+index
    })
  }
})