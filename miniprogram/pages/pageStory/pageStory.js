// pages/pageStory/pageStory.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    pageNum:0,
    pageTotal:'',
    pageSize:15,
    baseData:[]
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  },
  handStoryDetial:function(e){
    // app.globalData.files = res.fileID
    var item = e.currentTarget.dataset['item'];
    // console.log(item);
    app.globalData.item = item;
    wx.navigateTo({
      url: '../storyDetail/storyDetail',
    })
  },
  initDotal:function(){
    const db = wx.cloud.database()
    let that =this
    const countResult = db.collection('counters').count().then(res => {
      that.setData({
        pageTotal: res.total
      })
    })
  },
  initDataBase:function(){
    const that = this
    let index = this.data.pageNum

    const MAX_LIMIT = this.data.pageSize
    const db = wx.cloud.database()
    let skipNum = this.data.pageNum * MAX_LIMIT
   
    if (skipNum){
      db.collection('counters').skip(skipNum).limit(MAX_LIMIT).get().then(res => {
        console.log('skip')
        console.log(that.data)
        let pageNum = that.data.pageNum + 1
        that.setData({
          pageNum: pageNum,
          baseData: [...that.data.baseData, ...res.data]
        })
      })
    }else{
      db.collection('counters').limit(MAX_LIMIT).get().then(res => {
        console.log('noskip')
        console.log(that.data)
        let pageNum = that.data.pageNum + 1
        that.setData({
          pageNum: pageNum,
          baseData: [...that.data.baseData, ...res.data]
        })
      })
    }
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
    this.initDotal()
    this.initDataBase()
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
    this.setData({
      pageNum: 0,
      baseData:[]
    })
    this.initDataBase();
    wx.stopPullDownRefresh()
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    if ((this.data.pageNum * this.data.pageSize) < this.data.pageTotal){
        this.initDataBase()
    }
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})