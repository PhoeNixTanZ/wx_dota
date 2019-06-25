// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var local_database_1 = {
      username: '谈政',
      sex: '男',
      age: '25',
      star: '狮子座',
      address: '江苏省扬州市江都区真武镇',
      introduce:'《刀塔2》完整继承了原作《DotA》一百多位的英雄，并脱离了上一代作品《DOTA》所依赖的《魔兽争霸Ⅲ》引擎的多人即时对战游戏，《刀塔2》的世界由天辉和夜魇两个阵营所辖区域组成，有上、中、下三条主要的作战道路相连接，中间以河流为界。每个阵营分别由五位玩家所扮演的英雄担任守护者，他们将以守护己方远古遗迹并摧毁敌方远古遗迹为使命，通过提升等级、赚取金钱、购买装备和击杀敌方英雄等手段达成胜利。'
    };
    this.setData(local_database_1)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})