const express = require('express');
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
router.get('/news',(req, res)=>{
    res.render('news');
});
router.get('/news/1',(req, res)=>{
    res.render('news_page');
});
router.get('/', (req, res) => {
    res.render('home');
    // athlete.addRank();
    // var r = new Role();
    // var u = new User();
    // u.roleId = 1;
    // console.log(r);
    // role.create(r).then((a)=>{
    //     console.log(a);
    // });
    // user.create(u).then((ans)=>{
    //     console.log(ans);
    // });


    // news.findAll().then((ath) => {
    //     var newsdata = [];
    //     var i = 0;
    //     ath.forEach(newss => {
    //         if (i < 4) {
    //             var n = new NewsModel();
    //             console.log(newss.get(n));
    //             newsdata.push(newss.get(n));
    //             i = i++;
    //         }
    //         i = 3;
    //     });
    //     events.findAll().then((ath) => {
    //         var eventsdata = [];
    //         var fitnessdata = [];
    //         var i = 0;
    //         athletes.findAll().then((ath1) => {

    //             fitness.findAll().then((ath2) => {

    //                 ath.forEach(newss => {
    //                     // for each athlete select those whose id are in the event
    //                     ath1.forEach(athlt => {
    //                         var a1 = new AthletesModel();
    //                         var at = athlt.get(a1);
    //                         if (at.id == newss.athlete1) {
    //                             newss.athlete1 = at;
    //                             // fighters.push(at);
    //                         }
    //                         if (at.id == newss.athlete2) {
    //                             newss.athlete2 = at;
    //                             // fighters.push(at);
    //                         }
    //                     });
    //                     if (i < 4) {
    //                         var n = new Fight();
    //                         console.log(newss.get(n));
    //                         eventsdata.push(newss.get(n));
    //                         i = i++;
    //                     }
    //                     i = 3;
    //                 });
    //                 ath2.forEach(fit => {
    //                     if (i < 4) {
    //                     var fits = new Fitness();
    //                     fits= fit.get(fits); 
    //                     fitnessdata.push(fits);
    //                         i = i++;
    //                     }
    //                     i = 3;
    //                 });
    //                 console.log(eventsdata);
    //                 res.render('index', {latestnews:newsdata, newslength:newsdata.length, latestevents:eventsdata, eventslength:eventsdata.length, fitness:fitnessdata, fitnesslenght:fitnessdata.lenght});
    //             });
    //         });

    //     });

    // });

    // res.render('index', {latestnews:newsdata, newslength:newsdata.length});



});

// router.post('/add', (req, res) => {
//     // req,body
//     var athl = new News();
//     athl = req.body;
//     const da = news.create(athl).then((ath) => {
//         // athletes.push(ath);
//         return ath
//     });
//     res.render('news', { data: da });

// });
module.exports = router;