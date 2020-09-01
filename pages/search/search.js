// pages/search/search.js
Page({

  /**
   * Page initial data
   */
  data: {
    keyboardHeight: 100,
    apiUrl: 'http://39.106.229.224/api/words/',
    word:{"name":"jack",
    "meanings":[{"pos":"n.","meaning":"千斤顶；插座；作动简；起重器"},{"pos":"v.","meaning":"张拉；用起重器抬起；偷(车)"},{"pos":"adj.","meaning":"厌烦"},{"pos":"网络","meaning":"杰克；家有杰克；升降机"}]}
    // word: {},
  },


  handleSearchInput: function(e) {
    let that = this;
    let word = e.detail.value;
    wx.request({
      url: this.data.apiUrl + word + '/',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        that.setData({word: res.data});
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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