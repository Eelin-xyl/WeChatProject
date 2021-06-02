var weeksArray = [];
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //forum，类别，第一个list是title，第二个是description，第三个是跟帖。
    //类别1，study; 2, joy; 3, talk
    flt: 'all',
    items: [
      { name: 'talk', value: 'Talk', checked: 'true' },
      { name: 'study', value: 'Study' },
      { name: 'joy', value: 'Joy' }
    ],
    type: 'talk',
    tpf: [],
    showModalStatus: false,
    message: '',
  },

  addCourse: function () {
    this.setData({ showModalStatus: true })
  },

  cancel: function () {
    this.setData({ showModalStatus: false })
  },

  all: function () {
    this.setData({
      flt: 'all'
    });
    this.onLoad();
  },

  study: function () {
    this.setData({
      flt: 'study'
    });
    this.onLoad();
  },

  joy: function () {
    this.setData({
      flt: 'joy'
    });
    this.onLoad();
  },

  talk: function () {
    this.setData({
      flt: 'talk'
    });
    this.onLoad();
  },


  bindChange(res) {
    console.log(res.detail.value);
    var info = res.detail.value;
    if (info == ''){
    var app = getApp();
    var f = app.globalData.forum;
    this.setData({
      tpf : f
    })
    }
    else {
      var app = getApp();
      var fom = app.globalData.forum;
      for (var i = 0; i < fom.length; i++){
        if (fom[i].ttl.indexOf(info) == -1)
        {
          fom[i].select = false;
        }
        else{
          fom[i].select = true;
        }
      }
      var app = getApp();
      var rforum = app.globalData.forum;
      var temp = [];
      for (var i = 0; i < rforum.length; i++) {
        if (rforum[i].select == true) {
          temp = temp.concat([rforum[i]])
        }
      }
      this.setData({
        tpf: temp,
        message: '',
        // showModalStatus: false,
      })
      console.log('123',this.data.tpf);
      // this.onLoad();
    }

    // this.setData({
    //   message : res.detail.value
    // })
  },
  

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      type: e.detail.value,
    })
  },

  navigateTo(e) {
    // const url = e.currentTarget.dataset.url;
    var app = getApp();
    app.globalData.target = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '../comment/comment'
    });

  },

  like(e) {
    var app = getApp();
    for (var i = 0; i < app.globalData.forum.length; i++){
      if (app.globalData.forum[i].ttl == e.currentTarget.dataset.title){
        break;
      }
    }
    if (app.globalData.forum[i].like == true){
      app.globalData.forum[i].like = false;
    }
    else{
      app.globalData.forum[i].like = true;
    }
    this.onLoad();
  },

  submitSchedule: function (event) {
    var that = this;
    var scheduleInfo = event.detail.value;
    var tp = that.data.type;
    var title = scheduleInfo.title;
    var dcp = scheduleInfo.dcp;
    // var location = scheduleInfo.address;

    if (
      title == "" || title == null || title == undefined ||
      dcp == "" || dcp == null || dcp == undefined) {
      wx.showModal({
        title: 'Notice',
        content: 'All items should not be empty',
        confirmColor: '#2EA7E0',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            console.log('用户点击确定')
          } else {//这里是点击了取消以后
            console.log('用户点击取消')
          }
        }
      })
      return this.onLoad();
      // }else  if(location.indexOf(" ") != -1)
      // {
      //     console.log("location以空格分隔");
      // }else{
      //   wx.showModal({
      //     title: 'Notice',
      //     content: 'location need be sparate by blank space(eg. SC 336)',
      //     confirmColor: '#2EA7E0',
      //     showCancel: false,
      //     success: function (res) {
      //       if (res.confirm) {//这里是点击了确定以后
      //       } else {//这里是点击了取消以后
      //       }
      //     }
      //   })
    }

    // var that = this;
    // var scheduleInfo = event.detail.value;

    var app = getApp();
    var sclist = app.globalData.forum;
    sclist = sclist.concat([{
      "type": tp,
      "ttl": title,
      "dcp": dcp,
      "cmt": [],
    }]);
    app.globalData.forum = sclist;
    this.setData({
      flt: 'all'
    })
    wx.showToast({
      title: 'add successfully~',
      icon: "none",
      duration: 2000
    })
    this.onLoad();
  },

  // myonLoad: function(options){
  //   var that = this;
  //   var app = getApp()
  //   var scheduleList = app.globalData.database;
  //   wx.getStorage({
  //     key: 'scheduleInfo',
  //     success: function(res){
  //       that.setData({
  //         scheduleList: res.data

  //       })
  //     }
  //   })


  //   var daysArray = getSevenDays();
  //   var sch_listData = dealData(scheduleList);


  //   this.setData({
  //     dateArray: daysArray,
  //     sch_listData: sch_listData,
  //   });
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var app = getApp();
    var rforum = app.globalData.forum.slice();
    rforum.reverse();
    this.setData({
      showModalStatus: false,
    })
    if (this.data.flt == 'all') {
      this.setData({
        tpf: rforum,
        // showModalStatus: false,
      })
    }
    if (this.data.flt == 'study') {
      var temp = [];
      for (var i = 0; i < rforum.length; i++) {
        if (rforum[i].type == 'study') {
          temp = temp.concat([rforum[i]])
        }
      }
      this.setData({
        tpf: temp,
        // showModalStatus: false,
      })
    }
    if (this.data.flt == 'joy') {
      var temp = [];
      for (var i = 0; i < rforum.length; i++) {
        if (rforum[i].type == 'joy') {
          temp = temp.concat([rforum[i]])
        }
      }
      this.setData({
        tpf: temp,
        // showModalStatus: false,
      })
    }
    if (this.data.flt == 'talk') {
      var temp = [];
      for (var i = 0; i < rforum.length; i++) {
        if (rforum[i].type == 'talk') {
          temp = temp.concat([rforum[i]])
        }
      }
      this.setData({
        tpf: temp,
        // showModalStatus: false,
      })
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
    // var that = this;
    // GetDepartment_info(that);
    // this.onLoad();
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

})