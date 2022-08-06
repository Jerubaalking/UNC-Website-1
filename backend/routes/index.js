const express = require('express');
const { _DB } = require('../../database/schemas');
const router = express.Router();
// const news = require('../controllers/news_controller');
// const events = require('../controllers/event-controller');
// const user = require('../controllers/user_controller');
// const role = require('../controllers/role_controller');
// const { User } = require('../../engine/models/user');
// const { Fight } = require('../../engine/models/event');
// const athletes = require('../controllers/athlete_controller');
// const News = require('../models/news');
// const Role = require('../../engine/models/role');
// const NewsModel = require('../../engine/models/news');
// const AthletesModel = require('../../engine/models/athlete');
// const fitness = require('../controllers/fitness_controller');
// const Fitness = require('../../engine/models/fitness');
// const Event = require('../../engine/models/event');
router.get('/',async (req, res)=>{
    const news = await new _DB('News');
    const newslist = JSON.parse(JSON.stringify(await news.findWithRelatives()));
    console.log("newslist::",newslist);
    res.render('home', {news:newslist});

});

module.exports = router;