// miniprogram/pages/storyDetail/storyDetail.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    discussList:[],
    discussVlaue:'',
    avatarUrl: '',
    userInfo: {},
    item: app.globalData
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.getDiscuss()
    var that =this
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              that.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  bindTextInputBlur:function(e){
    let dataset = e.currentTarget.dataset
    this.setData({
      discussVlaue: e.detail.value
    })
  },
  postDiscuss:function(){
    var discussVlaue =this.data.discussVlaue
    if (!discussVlaue){
      wx.showToast({
        title: '评论内容不能为空',
      })
    }
    var that =this
    const db = wx.cloud.database()

    db.collection('discuss_table').add({
      data: {
        discuss_id: this.data.item.item._id,
        avatarUrl:this.data.avatarUrl,
        userName: this.data.userInfo.nickName,
        discuss_content: discussVlaue,
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        that.setData({
          discussVlaue:''
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
        that.getDiscuss()
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },
  getDiscuss:function(){
    console.log(this.data.item.item._id,)
    const db = wx.cloud.database()
    const that =this
    db.collection('discuss_table').where({
      discuss_id: that.data.item.item._id,
    }).get({
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        console.log(res)
        that.setData({
          discussList:res.data
        })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})