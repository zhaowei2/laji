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
    baseData:[],
    data:[
      { "_id": "25c59b425d510521121d1e8b102a09f3",
       "discuss_content": "2312", 
       "_openid": "os8Tx5O9Y7GJjRyMLcAbE1MyMsOc",
        "discuss_id": "face13585d50d73d11f7a1c068380d49", 
        "avatarUrl":      "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLG78mMkQicvFibh1HYkZFPuFOEFHPJiatec3Go0L5IoEHo9ZN8tRFric75fbwQsnCPVvwEQrLGf1PpTQ/132", "userName": "zero" },
{ "_id": "25c59b425d510755121ef71755846e54", 
"userName": "zero", 
"discuss_content": "22312",
 "_openid": "os8Tx5O9Y7GJjRyMLcAbE1MyMsOc", 
 "discuss_id": "face13585d50d73d11f7a1c068380d49",
  "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLG78mMkQicvFibh1HYkZFPuFOEFHPJiatec3Go0L5IoEHo9ZN8tRFric75fbwQsnCPVvwEQrLGf1PpTQ/132" },
{ "_id": "25c59b425d5108e6122051237e0062f6", "discuss_content": "13123", "_openid": "os8Tx5O9Y7GJjRyMLcAbE1MyMsOc", "discuss_id": "face13585d50d73d11f7a1c068380d49", "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLG78mMkQicvFibh1HYkZFPuFOEFHPJiatec3Go0L5IoEHo9ZN8tRFric75fbwQsnCPVvwEQrLGf1PpTQ/132", "userName": "zero" },
{ "_id": "25c59b425d51140e1229a04e3e231164", "userName": "zero", "discuss_content": "213213", "_openid": "os8Tx5O9Y7GJjRyMLcAbE1MyMsOc", "discuss_id": "face13585d50d73d11f7a1c068380d49", "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLG78mMkQicvFibh1HYkZFPuFOEFHPJiatec3Go0L5IoEHo9ZN8tRFric75fbwQsnCPVvwEQrLGf1PpTQ/132" },
{ "_id": "25c59b425d5114301229bd045726bc71", "userName": "zero", "discuss_content": "3213", "_openid": "os8Tx5O9Y7GJjRyMLcAbE1MyMsOc", "discuss_id": "face13585d50d73d11f7a1c068380d49", "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLG78mMkQicvFibh1HYkZFPuFOEFHPJiatec3Go0L5IoEHo9ZN8tRFric75fbwQsnCPVvwEQrLGf1PpTQ/132" },
{ "_id": "25c59b425d5114581229de557e18d4fe", "_openid": "os8Tx5O9Y7GJjRyMLcAbE1MyMsOc", "discuss_id": "face13585d50d73d11f7a1c068380d49", "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLG78mMkQicvFibh1HYkZFPuFOEFHPJiatec3Go0L5IoEHo9ZN8tRFric75fbwQsnCPVvwEQrLGf1PpTQ/132", "userName": "zero", "discuss_content": "34" },
{ "_id": "26b301645d5108df121dd01858f50306", "discuss_id": "face13585d50d73d11f7a1c068380d49", "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLG78mMkQicvFibh1HYkZFPuFOEFHPJiatec3Go0L5IoEHo9ZN8tRFric75fbwQsnCPVvwEQrLGf1PpTQ/132", "userName": "zero", "discuss_content": "q3213", "_openid": "os8Tx5O9Y7GJjRyMLcAbE1MyMsOc" },
{ "_id": "26b301645d5108ea121dd9b5203ef90d", "discuss_id": "face13585d50d73d11f7a1c068380d49", "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLG78mMkQicvFibh1HYkZFPuFOEFHPJiatec3Go0L5IoEHo9ZN8tRFric75fbwQsnCPVvwEQrLGf1PpTQ/132", "userName": "zero", "discuss_content": "13213", "_openid": "os8Tx5O9Y7GJjRyMLcAbE1MyMsOc" },
{ "_id": "890198e15d5104ee121b8ace6a546fdf", "_openid": "os8Tx5O9Y7GJjRyMLcAbE1MyMsOc", "discuss_id": "face13585d50d73d11f7a1c068380d49", "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLG78mMkQicvFibh1HYkZFPuFOEFHPJiatec3Go0L5IoEHo9ZN8tRFric75fbwQsnCPVvwEQrLGf1PpTQ/132", "userName": "zero", "discuss_content": "123123" },
{ "_id": "890198e15d5108b9121ec4e436a29d14", "_openid": "os8Tx5O9Y7GJjRyMLcAbE1MyMsOc", "discuss_id": "face13585d50d73d11f7a1c068380d49", "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLG78mMkQicvFibh1HYkZFPuFOEFHPJiatec3Go0L5IoEHo9ZN8tRFric75fbwQsnCPVvwEQrLGf1PpTQ/132", "userName": "zero", "discuss_content": "12313" },
{ "_id": "890198e15d5108fe121eff7a7f49fcf9", "_openid": "os8Tx5O9Y7GJjRyMLcAbE1MyMsOc", "discuss_id": "face13585d50d73d11f7a1c068380d49", "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLG78mMkQicvFibh1HYkZFPuFOEFHPJiatec3Go0L5IoEHo9ZN8tRFric75fbwQsnCPVvwEQrLGf1PpTQ/132", "userName": "zero", "discuss_content": "1231" },
{ "_id": "face13585d5113db122b27a06950cd2c", "userName": "zero", "discuss_content": "32131", "_openid": "os8Tx5O9Y7GJjRyMLcAbE1MyMsOc", "discuss_id": "face13585d50d73d11f7a1c068380d49", "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLG78mMkQicvFibh1HYkZFPuFOEFHPJiatec3Go0L5IoEHo9ZN8tRFric75fbwQsnCPVvwEQrLGf1PpTQ/132" }

    ]
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '图片',
    })
    this.initDataBase();
    this.initDotal();
  },
  // 点赞
  handStoryPraise:function(e){
    let item = e.currentTarget.dataset['item'];
    let index = e.currentTarget.dataset['index'];
    let that = this;
    console.log(index)
    wx.cloud.callFunction({
      name:'pic_operation',
      data:{
        type:'praise',
        data: item
      } 
    }).then(res=>{
      let baseData = that.data.baseData;
      let praiseNum = baseData[index].praise+1
      let praise = 'baseData[' + index + '].praise';
      console.log(praise)
      if (res.result.stats.updated == 1){
        that.setData({
          [praise]: praiseNum
        })
      }
    }).catch(console.err)
  },
  // 踩
  handStoryPeak: function (e) {
    let item = e.currentTarget.dataset['item'];
    let index = e.currentTarget.dataset['index'];
    let that = this;
    wx.cloud.callFunction({
      name: 'pic_operation',
      data: {
        type: 'peak',
        data: item
      }
    }).then(res => {
      let baseData = that.data.baseData;
      let praiseNum = baseData[index].peak + 1
      console.log(praiseNum)
      let peak = 'baseData[' + index + '].peak';
      if (res.result.stats.updated == 1) {
       
        that.setData({
          [peak]: praiseNum
        })
      }
    }).catch(console.err)
  },
  getDiscussCounts(){
    let item = app.globalData.item;
    let index = app.globalData.index;
    if (item === undefined){
      return false
    }
    if (index === undefined){
      return false
    }
    let that = this;
    wx.cloud.callFunction({
      name: 'pic_operation',
      data: {
        type: 'discuss',
        data: item
      }
    }).then(res => {
      if (res.result.data) {
        let baseData = that.data.baseData;
        let praiseNum = res.result.data.length;
        let discuss = 'baseData[' + index + '].discuss';
        that.setData({
          [discuss]: praiseNum
        })
      }
    }).catch(console.err)
  }
  ,
  handStoryDetial:function(e){
    let item = e.currentTarget.dataset['item'];
    let index = e.currentTarget.dataset['index'];
    app.globalData.item = item;
    app.globalData.index = index;
    console.log(app.globalData)
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
      db.collection('counters').skip(skipNum).limit(MAX_LIMIT).orderBy('times', 'desc').get().then(res => {
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
    console.log("onReady")
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    console.log("onShow")
    this.getDiscussCounts()

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