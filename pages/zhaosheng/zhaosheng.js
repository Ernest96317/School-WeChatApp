// pages/zhaosheng/zhaosheng.js
Page({
  data:{
        src: "http://ote98cgj7.bkt.clouddn.com/1.mp4",
    banners: [
        {
          id: 1,
          img: 'http://www.ecit.edu.cn//_upload/article/images/1b/f6/51a824f744738eb236d3b4b674cd/742f55dd-6902-4507-b975-02cce136c86a.jpg'
        },
        {
          id: 2,
          img: 'http://www.ecit.edu.cn/_upload/article/images/74/e6/40d823f44087b3430a88a33cb521/7502f000-8070-4364-88f0-c82a00bd8dab.jpg'
        },
        {
          id: 3,
          img: 'http://www.ecit.edu.cn//_upload/article/images/e1/54/9974a6ea4d33bb03b10c32c93294/4197d31c-714f-4e26-abd5-29390ead402b.jpg'
        },
        {
          id: 4,
          img: 'http://www.ecit.edu.cn//_upload/article/images/be/1d/16a5906c48a4819da575babd4f24/041eff9c-a1b6-46c1-923d-8c24a1afd820.jpg'
        },
        {
          id: 5,
          img: 'http://www.ecit.edu.cn//_upload/article/images/b7/b9/4921297845bd9c91c6cd40f9ddfa/ed564459-80d3-43df-afa4-b262d5dbb65a.jpg'
        }
      ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/59082eb57a878d73716e5b73/aa/list',
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
