// pages/detail/detail.js
let datas =require('../../datas/list-data');
Page({

  /**
   * 页面的初始数据
   */
  data: {
     detailObj:{},
    index:0,
    isCollected:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let{index} =options;
  let detailObj =datas.list_data[index]
    this.setData({
      detailObj,
      index
    })
  },
  handleCollection(){
    let isCollected =!this.data.isCollected;
    this.setData({isCollected});
    let title =isCollected ? '收藏成功':'取消收藏';
    wx.showToast({
      title,
      icon:'success'
    })
  }

})