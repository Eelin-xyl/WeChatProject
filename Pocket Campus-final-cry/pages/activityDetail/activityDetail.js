// pages/activityDetail/activityDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activity:{},
    pictureUrl:'',
    attend: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    var activities = app.globalData.activities;
    console.log(activities);
    var target = app.globalData.targetName;
    for (var i = 0;i<activities.length;i++){
      if (activities[i].name == target){
        this.setData({
          activity : activities[i]
        })
      }
    };
    if (this.data.activity.type == 'evening party'){
      this.setData({
        pictureUrl : '/images/calendar.png'
      })
    }
    else if (this.data.activity.type == 'match') {
      this.setData({
        pictureUrl : '/images/home.png'
      })
    }
    else if (this.data.activity.type == 'seminar') {
      this.setData({
        pictureUrl : '/images/icon-arrowdown.png'
      })
    }
    else if (this.data.activity.type == 'club activity') {
      this.setData({
        pictureUrl : '/images/destination.png'
      })
    };
    if (this.data.activity.number == 0){
      console.log(1);
      this.setData({
        attend:'attend'
      })
    }
    else{
      console.log(2);
      this.setData({
        attend:'cancel attend'
      })
    }
    console.log('last', activities)
    console.log(app.globalData.activities)
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
    this.onLoad();
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

  register:function(){
    var app = getApp();
    console.log('开头', app.globalData.activities)
    if (this.data.attend == 'attend'){
      app.globalData.registerActivity = this.data.activity;
      wx.navigateTo({
        url: '../register/register',
      })
    }
    else {
      console.log('first', app.globalData.activities);
      for (var i=0;i<app.globalData.activities.length;i++) {
        if (this.data.activity.name == app.globalData.activities[i].name){
          app.globalData.activities[i].number = 0;
          console.log(app.globalData.activities[i]);
        }
      }
      // this.onLoad;
      wx.navigateBack({
        delta: 1,
      })
    }
  },
  navigation:function(){
    var app = getApp();
    app.globalData.selectedPlace = this.data.activity.location;
    console.log(this.data.activity.location);
    app.globalData.mark = true;
    wx.reLaunch({
      url: '../map/map',
    })
  }
})