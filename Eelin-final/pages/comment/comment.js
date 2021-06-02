Page({
  data:{
    // text:"这是一个页面"
    content:{},
    message: '',
    cmt: [],
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var app = getApp();
    var ttl = app.globalData.target;
    var fom = app.globalData.forum;
    for (var i = 0; i < fom.length; i++){
      if (fom[i].ttl == ttl){
        var cont = fom[i];
        break;
      }
    }
    var ct = cont.cmt;
    this.setData({
      content: cont,
      cmt: ct,
    })
    // console.log(typeof this.data.cmt, this.data.cmt)
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },



//更新
bindChange(res) {
  this.setData({
    message : res.detail.value
  })
},

send: function () {
  var flag = this
  if (this.data.message.trim() == ''){
    wx.showToast({
      title: 'input is empty~',
      icon: "none",
      duration: 2000
    })
  }else {
    var app = getApp();
    var fom = app.globalData.forum;
    for (var i = 0; i < fom.length; i++){
      if (fom[i].ttl == this.data.content.ttl){
        break;
      }
    }
    app.globalData.forum[i].cmt.push(this.data.message);
    this.data.message = ''
    wx.showToast({
      title: 'send successfully~',
      icon: "none",
      duration: 2000
    })
    this.onLoad();
  }
},



  // submit: function(event){
  //   var info = event.detail.value.cmt;
  //   console.log(info);
  //   if (info==''||info==null||info == undefined){
  //     wx.showModal({
  //       title: 'Notice',
  //       content: 'Message should not be empty',
  //       confirmColor: '#2EA7E0',
  //       showCancel: false,
  //       success: function (res) {
  //         if (res.confirm) {//这里是点击了确定以后
  //           console.log('用户点击确定')
  //         } else {//这里是点击了取消以后
  //           console.log('用户点击取消')
  //         }
  //       }
  //     })

  //     return this.onLoad();
  //   }


  //   var app = getApp();
  //   var fom = app.globalData.forum;
  //   for (var i = 0; i < fom.length; i++){
  //     if (fom[i].ttl == this.data.content.ttl){
  //       break;
  //     }
  //   }
  //   app.globalData.forum[i].cmt.push(info);
  //   this.onLoad();
  // }
})