const app = getApp()

Page({
  data: {
    slides: null,
    entities: null
  },
  testDrive(){
    wx.showToast({
      title: 'ζδΈζ―ζ',
    })
  },
  readMore(event) {
    wx.navigateTo({
      url: `/pages/vehicles/show?id=${ event.target.dataset.id }`
    })
  },
  onLoad() {
    this.setData({
      slides: app.globalData.slides,
      entities: app.globalData.vehicles
    })
  }
})