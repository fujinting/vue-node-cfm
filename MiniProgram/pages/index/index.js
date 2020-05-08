import {
  getMainBannes,
  getMainNews,
  getMainVideos,
  getMainStrategies
 } from '../../service/home.js'
Page({

 
  data: {
    banners:[],
    categories:[{text:'枪械',img:'../../assets/home/gun.png'},
                {text:'活动',img:'../../assets/home/activity.png'},
                {text:'社区',img:'../../assets/home/commun.png'},
                {text:'CDKey',img:'../../assets/home/key.png'},
                {text:'周边商城',img:'../../assets/home/cart.png'}],
    news:[],
    videos:[],
    strategies:[]
    
  },

  onLoad: function (options) {
    this._getMainBannes()
    this._getMainNews()
    this._getMainVideos()
    this._getMainStrategies()
  },
  
  _getMainBannes(){
    getMainBannes().then(res=>{
      // console.log(res.data[0].items);
      
      this.setData({
        banners:res.data[0].items
      })
    })
  },
  _getMainNews(){
    getMainNews().then(res=>{   
      // console.log(res.data);
      this.setData({
        news:res.data.reverse()
      })
     
    })
  },
  _getMainVideos(){
    getMainVideos().then(res=>{
      // console.log(res.data);
      this.setData({
        videos:res.data.reverse()
      })
    })
  },
  _getMainStrategies(){
    getMainStrategies().then(res=>{
      console.log(res.data);
      
      this.setData({
        strategies:res.data.reverse()
      })
    })
  }

 
})