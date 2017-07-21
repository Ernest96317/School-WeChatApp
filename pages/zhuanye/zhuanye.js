// pages/zhuanye/zhuanye.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/596cc8afa1d30433d835924f/zhuanye/zhuanye',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res.data.items);
        that.setData({
          items: res.data.items
        });
      }
    })
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
  }
})
