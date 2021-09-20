const app = getApp()
Page({

  data:{
    enntities:null,
    currentVid:null,
    currentVideo:null
  },
  play(e){
    if (this.data.currentVid!==null) {
      this.data.currentVideo.pause()
    }
    const currentVideo = wx.createVideoContext(
      `${e.target.dataset.vid}`)
    currentVideo.play()

    this.setData({
      currentVideo,
      currentVid:e.target.dataset.vid
    })
  },
  onLoad(){
    this.setData({
      entities: app.globalData.stories
    })
  }
})