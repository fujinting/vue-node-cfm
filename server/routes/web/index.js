module.exports = app => {
    const router = require('express').Router()

    const News = require('../../models/News')

    const Videos = require('../../models/Video')

    const Strategies = require('../../models/Strategy')

    const Matchs = require('../../models/Match')

    const Ads = require('../../models/Ad.js')


    // 查询轮播图广告
    router.get('/main/ads', async (req, res) => {         //列表查询

        const items = await Ads.find()

        res.send(items)

    })


    //查询主页新闻
    router.get('/main/news', async (req, res) => {         //列表查询

        const items = await News.find().limit(5)

        res.send(items)

    })

    //查询主页视频
    router.get('/main/videos', async (req, res) => {         //列表查询

        const items = await Videos.find().limit(5)

        res.send(items)


    })

    //查询主页攻略
    router.get('/main/strategies', async (req, res) => {         //列表查询

        const items = await Strategies.find().limit(5)

        res.send(items)


    })



    // -------------=-=-=========-=-=-=-=-=-=---------=-=-=-=-=-=--===--=-=-=-=-+——=z-+_+_+=

     //查询视频页视频1
     router.get('/video/videonew', async (req, res) => {         //视频最新查询

        const items = await Videos.find().limit(10)

        res.send(items)


    })

    // 查询视频页视频2
    router.get('/video/:id', async (req, res) => {         //视频(除最新)查询

        const items = await Videos.find({"categories":req.params.id}).limit(10)

        res.send(items)


    })

     //查询攻略页攻略
     router.get('/strategy/:id', async (req, res) => {         //列表查询

        const items = await Strategies.find({"categories":req.params.id}).limit(10)

        res.send(items)


    })

    // 查询赛事页赛事
    router.get('/match/matchlist', async (req, res) => {         //列表查询

        const items = await Matchs.find().limit(10)

        res.send(items)


    })






    
    //查询赛事详情页
    router.get('/match/detail/:id', async (req, res) => {

        const detail = await Matchs.findById(req.params.id)
    
        res.send(detail)
    
    
      })


    //查询攻略详情页
    router.get('/strategy/detail/:id', async (req, res) => {

        const detail = await Strategies.findById(req.params.id)
    
        res.send(detail)
    
    
      })


    //查询新闻公告详情页
    router.get('/new/detail/:id', async (req, res) => {

        const detail = await News.findById(req.params.id)
    
        res.send(detail)
    
    
      })


    app.use('/web/api', router)



}