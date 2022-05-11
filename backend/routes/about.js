const express = require('express');
const router = express.Router();
const {AboutMMA, AboutSport, AboutTeam, AboutOlympics} = require('../../engine/models/about');
const AboutControllers = require('../controllers/about_controller');

router.get('/', (req, res)=>{
    var model = new AboutMMA();
    var arrayData = [];
    AboutControllers.findAll(model, "mma").then((mmas)=>{
        if(mmas.length <=0){
            res.render("about", {mma:arrayData});
        }else{
            mmas.forEach(data => {
                var mma = new AboutMMA();
                arrayData.push(data.get(mma));
            });
            console.log(arrayData);
            res.render("about", {mma:arrayData});
        }
    }).catch((err)=>{
        throw err;
    });
    // res.render('about');
});
router.get("/olympics", (req, res) => {
    var model = new AboutOlympics();
    var arrayData = [];
    AboutControllers.findAll(model, "olympics").then((olympics)=>{
        if(olympics.length <=0){
            res.render("about_team", {olympics:arrayData});
        }else{
            olympics.forEach(data => {
                var olympic = new AboutTeam();
                arrayData.push(data.get(olympic));
            });
        console.log(arrayData);
            res.render("about_olympics", {olympics:arrayData});
        }
    }).catch((err)=>{
        throw err;
    });
    // res.render("about_olympics");
});
router.get("/mma", (req, res) => {
    var model = new AboutMMA();
    var arrayData = [];
    AboutControllers.findAll(model, "mma").then((mmas)=>{
        if(mmas.length <=0){
            res.render("about_sport", {mma:arrayData});
        }else{
            mmas.forEach(data => {
                var mma = new AboutMMA();
                arrayData.push(data.get(mma));
            });
            console.log(arrayData);
            res.render("about_sport", {mma:arrayData});
        }
    }).catch((err)=>{
        throw err;
    });
});
router.get("/sport", (req, res) => {
    var model = new AboutSport();
    var arrayData = [];
    AboutControllers.findAll(model, "sport").then((sports)=>{
        if(sports.length <=0){
            res.render("about_sport", {sport:arrayData});
        }else{
            sports.forEach(data => {
                var sport = new AboutSport();
                arrayData.push(data.get(sport));
            });
            console.log(arrayData);
            res.render("about_sport", {sport:arrayData});
        }
    }).catch((err)=>{
        throw err;
    });
});

router.get("/team", (req, res) => {
    var model = new AboutTeam();
    var arrayData = [];
    AboutControllers.findAll(model, "team").then((teams)=>{
        if(teams.length <=0){
            res.render("about_team", {team:arrayData});
        }else{
            teams.forEach(data => {
                var team = new AboutTeam();
                arrayData.push(data.get(team));
            });
            console.log(arrayData);
            res.render("about_team", {team:arrayData});
        }
    }).catch((err)=>{
        throw err;
    });
});
module.exports = router;