// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activity:{},
    name:'',
    studentID: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    this.setData({
      activity:app.globalData.registerActivity
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

  },
  // 输入姓名
  inputName(e){
    this.setData({
     name : e.detail.value
    })
  },

  //输入手机号
  inputPhone(e){
    this.setData({
      studentID: e.detail.value
    })
  },

  submitInfo:function(){
    var app = getApp();
    for (var i =0;i<app.globalData.activities.length;i++) {
      if (this.data.activity.name == app.globalData.activities[i].name){
        app.globalData.activities[i].number = 1;
        console.log("in");
        console.log(app.globalData.activities[i]);
      }
    }
    // wx.navigateTo({
    //   url: '../activityDetail/activityDetail',
    // })
    wx.navigateBack({
      delta: 1,
    })
  }
})