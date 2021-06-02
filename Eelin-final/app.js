//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    target: '',
    userInfo: null,
    location:[
      {
      "name":"SA",
      "latitude":31.273531,
      "longitude": 120.740210
    },
    {
    "name":"SB",
    "latitude":31.273221,
    "longitude": 120.739680
    },
    {
      "name":"SC",
      "latitude":31.272742,
      "longitude": 120.740231
    },
    {
      "name":"SD",
      "latitude":31.272282,
      "longitude": 120.739671
    },
    {
      "name":"FB",
      "latitude":31.274688,
      "longitude": 120.738186
    },
    {
      "name":"CB",
      "latitude":31.273121,
      "longitude": 120.738288
    },
    {
      "name":"PB",
      "latitude":31.273522,
      "longitude": 120.741361
    },
    {
      "name":"MA",
      "latitude":31.273511,
      "longitude": 120.741720
    },
    {
      "name":"MB",
      "latitude":31.273032,
      "longitude": 120.741881
    },
    {
      "name":"EE",
      "latitude":31.272196,
      "longitude": 120.740857
    },
    {
      "name":"EB",
      "latitude":31.272711,
      "longitude": 120.741809
    },
  ],
    database: [
      {
        "dayOfWeek": "0",
        "timePeriod": "23",
        "classNum": "CPT401",
        "className": "Research Methods",
        "tutor": "Paul Craig",
        "address": "SA"
      },
      {
        "dayOfWeek": "1",
        "timePeriod": "15",
        "classNum": "CPT401",
        "className": "Research Methods",
        "tutor": "Paul Craig",
        "address": "DBG19"
      },
      {
        "dayOfWeek": "2",
        "timePeriod": "9",
        "classNum": "CPT405",
        "className": "Interactive Systems",
        "tutor": "Lingyun Yu",
        "address": "SC336"
      }
      ,
      {
        "dayOfWeek": "2",
        "timePeriod": "10",
        "classNum": "CPT405",
        "className": "Interactive Systems",
        "tutor": "Lingyun Yu",
        "address": "SC336"
      },
      {
        "dayOfWeek": "2",
        "timePeriod": "11",
        "classNum": "INT305",
        "className": "Machinge Learning",
        "tutor": "Erick Purwanto",
        "address": "CB162"
      },
      {
        "dayOfWeek": "2",
        "timePeriod": "12",
        "classNum": "INT305",
        "className": "Machinge Learning",
        "tutor": "Erick Purwanto",
        "address": "SC162"
      },
      {
        "dayOfWeek": "2",
        "timePeriod": "13",
        "classNum": "CPT402",
        "className": "Rsearch Methods",
        "tutor": "Paul Craig",
        "address": "SC162"
      },
      {
        "dayOfWeek": "2",
        "timePeriod": "15",
        "classNum": "LAN917",
        "className": "Academic Presentation",
        "tutor": "Yu Wang",
        "address": "MB237"
      },
      {
        "dayOfWeek": "2",
        "timePeriod": "16",
        "classNum": "LAN917",
        "className": "Academic Presentation",
        "tutor": "Yu Wang",
        "address": "MB237"
      },
      {
        "dayOfWeek": "3",
        "timePeriod": "9",
        "classNum": "CPT403",
        "className": "OOP",
        "tutor": "Thomas Selig",
        "address": "SB230"
      },
      {
        "dayOfWeek": "3",
        "timePeriod": "10",
        "classNum": "CPT403",
        "className": "OOP",
        "tutor": "Thomas Selig",
        "address": "SB230"
      },
      {
        "dayOfWeek": "3",
        "timePeriod": "11",
        "classNum": "INT402",
        "className": "Data Mining",
        "tutor": "Xi Yang",
        "address": "EE118"
      },
      {
        "dayOfWeek": "3",
        "timePeriod": "12",
        "classNum": "INT402",
        "className": "Data Mining",
        "tutor": "Xi Yang",
        "address": "EE118"
      },
      {
        "dayOfWeek": "4",
        "timePeriod": "10",
        "classNum": "LAN915",
        "className": "Reading for Writing",
        "tutor": "Sam Evans",
        "address": "SD254"
      },
      {
        "dayOfWeek": "4",
        "timePeriod": "11",
        "classNum": "LAN915",
        "className": "Reading for Writing",
        "tutor": "Sam Evans",
        "address": "SD254"
      },
      {
        "dayOfWeek": "4",
        "timePeriod": "12",
        "classNum": "LAN915",
        "className": "Reading for Writing",
        "tutor": "Sam Evans",
        "address": "SD254"
      },
      {
        "dayOfWeek": "4",
        "timePeriod": "14",
        "classNum": "INT402",
        "className": "Data Mining",
        "tutor": "Xi Yang",
        "address": "EE309"
      },
      {
        "dayOfWeek": "4",
        "timePeriod": "15",
        "classNum": "INT402",
        "className": "Data Mining",
        "tutor": "Xi Yang",
        "address": "EE309"
      },
      {
        "dayOfWeek": "4",
        "timePeriod": "16",
        "classNum": "CPT405",
        "className": "Interactive Systems",
        "tutor": "Lingyun Yu",
        "address": "SD446"
      },
      {
        "dayOfWeek": "4",
        "timePeriod": "17",
        "classNum": "CPT405",
        "className": "Interactive Systems",
        "tutor": "Lingyun Yu",
        "address": "SD446"
      },
      {
        "dayOfWeek": "5",
        "timePeriod": "13",
        "classNum": "CPT403",
        "className": "OOP",
        "tutor": "Thomas Selig",
        "address": "SD546"
      },
      {
        "dayOfWeek": "5",
        "timePeriod": "14",
        "classNum": "CPT403",
        "className": "OOP",
        "tutor": "Thomas Selig",
        "address": "SD546"
      },
      {
        "dayOfWeek": "5",
        "timePeriod": "16",
        "classNum": "INT305",
        "className": "Machine Learning",
        "tutor": "Erick Purwanto",
        "address": "SD554"
      },
      {
        "dayOfWeek": "5",
        "timePeriod": "17",
        "classNum": "INT305",
        "className": "Machine Learning",
        "tutor": "Erick Purwanto",
        "address": "SD554"
      }
      ],
      forum: [
        { 
          'select' : false, 
          'select' : false,
          'like' : true,
          'type' : 'study', 
          'ttl' : "good morning5", 
          'dcp' : "this is my first forum", 
          'cmt' : ['firstcomment','second comment','123','321']
        },
        { 
          'select' : false, 
          'like' : false,
          'type' : 'joy', 
          'ttl' : "hello 1234", 
          'dcp' : "this is my first forum", 
          'cmt' : ['firstcomment','second comment','123','321']
        },
        { 
          'select' : false, 
          'like' : false,
          'type' : 'joy', 
          'ttl' : "hello 123", 
          'dcp' : "this is my first forum", 
          'cmt' : ['firstcomment','second comment','123','321']
        },
        { 
          'select' : false, 
          'like' : false,
          'type' : 'talk', 
          'ttl' : "good night5", 
          'dcp' : "this is my first forum", 
          'cmt' : ['firstcomment','second comment','123','321']
        },
        { 
          'select' : false, 
          'like' : true,
          'type' : 'talk',
          'ttl' : "good night4", 
          'dcp' : "this is my first forum", 
          'cmt' : ['firstcomment','second comment','123','321']
        },
        { 
          'select' : false, 
          'like' : false,
          'type' : 'talk', 
          'ttl' : "good night3", 
          'dcp' : "this is my first forum", 
          'cmt' : ['firstcomment','second comment','123','321']
        },
        { 
          'select' : false, 
          'like' : false,
          'type' : 'talk', 
          'ttl' : "good night2", 
          'dcp' : "this is my first forum", 
          'cmt' : ['firstcomment','second comment','123','321']
        },
        { 
          'select' : false, 
          'like' : true,
          'type' : 'talk', 
          'ttl' : "good night1", 
          'dcp' : "this is my first forum", 
          'cmt' : ['firstcomment','second comment','123','321']
        },
        { 
          'select' : false, 
          'like' : false,
          'type' : 'study', 
          'ttl' : "good morning3", 
          'dcp' : "let's talk about study", 
          'cmt' : ['firstcomment','second comment','123','321']
        },
        { 
          'select' : false, 
          'like' : false,
          'type' : 'joy', 
          'ttl' : "joy joy joy ", 
          'dcp' : "let's talk about joy", 
          'cmt' : ['firstcomment','second comment','123','321']
        },
        { 
          'select' : false, 
          'like' : true,
          'type' : 'talk', 
          'ttl' : "good morning 2", 
          'dcp' : "what about you", 
          'cmt' : ['firstcomment','second comment','123','321']
        },
        { 
          'select' : false, 
          'like' : true,
          'type' : 'study', 
          'ttl' : "hi hi ", 
          'dcp' : "t123", 
          'cmt' : ['firstcomment','second comment','123','321']
        },
        { 
          'select' : false, 
          'like' : false,
          'type' : 'joy', 
          'ttl' : "goodbye", 
          'dcp' : "this is myforum", 
          'cmt' : ['firstcomment','second comment','123','321']
        },
        { 
          'select' : false, 
          'like' : true,
          'type' : 'talk', 
          'ttl' : "happy you", 
          'dcp' : "just talking", 
          'cmt' : ['firstcomment','second comment','123','321']
        }
      ],
  }
})