
Page({
  data:{
    //多列选择器：
    multiArray: [['音频', '视频'], ['mp3', '评书']],//二维数组，长度是多少是几列
    multiIndex: [0, 0],
  },
  //多列选择器：
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
    console.log(this.data.multiIndex[0], this.datamultiIndex[1])
    // console.log(e.detail.value)
    console.log('1为：', this.data.multiArray[0][e.detail.value[0]])
    console.log('2为：', this.data.multiArray[1][e.detail.value[1]])
  },
})