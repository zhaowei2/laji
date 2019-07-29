// miniprogram/pages/myStory/myStory.js
Page({

  /**
   * Page initial data
   */
  data: {
    imgUrl:'',
    fileId:'',
    filePath:'',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    textArea:'',
    avatarUrl: './../../images/no2.png',
    userInfo:{}
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // this.initGetUser()
    // 是否授权
    let that =this
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
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
    that.setData({
      avatarUrl: e.detail.userInfo.avatarUrl,
      userInfo: e.detail.userInfo
    })
  },
   // 发表内容
  bindTextAreaBlur(e){
    let dataset = e.currentTarget.dataset
    this.setData({
      textArea: e.detail.value
    })
  },
  subChoose:function(){
      let that = this; 
      if(!this.data.userInfo.nickName){
        wx.showToast({
          title: '请登录',
        })
        return false
      }
    
      if (!this.data.textArea){
        wx.showToast({
          title: '请填写内容',
        })
        return false
      }
      if (!this.data.fileId){
        wx.showToast({
          title: '请上传图片',
        })
        return false
      }
      const db = wx.cloud.database()
      db.collection('counters').add({
        data: {
          textArea: this.data.textArea,
          filePath: this.data.filePath,
          avatar:this.data.avatarUrl,
          nickName:this.data.userInfo.nickName,
          fileId:that.data.fileId
        },
        success: res => {
          // 在返回结果中会包含新创建的记录的 _id
          console.log(res)
          wx.showToast({
            title: '新增记录成功',
          })
          that.setData({
            textArea:'',
            imgUrl: '',
            fileId: '',
            filePath: '',
          })
          console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
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
  // 上传图片
  doUpload:function(){
    let that =this;
      wx.chooseImage({
        sizeType:['compressed'],
        sourceType:['album','camrea'],
        success: function(res) {
          wx.showLoading({
            title: '上传中',
          })
          const filePath=res.tempFilePaths[0]
          that.setData({
            imgUrl: filePath
          })
          // 上传图片
          var nowDate=new Date().getTime()
          var cloudPath = nowDate + filePath.match(/\.[^.]+?$/)[0]
          wx.cloud.uploadFile({
            cloudPath,
            filePath,
            success: res=> {
              console.log(res)
              that.setData({
                fileId: res.fileID
              })
              wx.cloud.downloadFile({
                fileID: res.fileID, // 文件 ID
                success: data => {
                  // 返回临时文件路径
                  console.log(data.tempFilePath)
                  that.setData({
                    filePath: data.tempFilePath
                  })
                },
                fail: console.error
              })
             
            }
          })
        },
        complete:()=>{
          wx.hideLoading()
        }
      })
  }
  ,

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