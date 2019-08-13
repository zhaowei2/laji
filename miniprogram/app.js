//app.js
App({
  onLaunch: function () {
    this.globalData = {}
    wx.getSystemInfo({
      success: res => {
        console.log(res)
    //     //导航高度
        this.globalData.navHeight = res.statusBarHeight + 46;
      }
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

  }
})
