const express = require('express');
const router = express.Router();
const {Fight} = require('../../engine/models/event');
const events = require('../controllers/event-controller');
const AthletesModel = require('../../engine/models/athlete');
const athletes = require('../controllers/athlete_controller');
router.get('/', (req, res)=>{
 
    var eventsData = [];
    events.findAll().then((eventss) => {
        // for each event select fighters
        if(eventss.length <= 0){
            console.log("event exist");
            res.render("events",{events:[], size:0});
        }else{

        eventss.forEach(eve => {
            var fight = new Fight();
            fight = eve.get(fight);
            var fighters = [];
            athletes.findAll().then((ath1)=>{
                // for each athlete select those whose id are in the event
                ath1.forEach(athlt => {
                    var a1 = new AthletesModel();
                    var at = athlt.get(a1);
                    if(at.id == fight.athlete1){
                        fight.athlete1 = at;
                        fighters.push(at);
                    }
                    if(at.id == fight.athlete2){
                        fight.athlete2 = at;
                        fighters.push(at);
                    }
                });
                console.log("Fighters:: ", fighters);
                eventsData.push(fight);
                res.render("events", { events: eventsData, size:eventsData.length });
            });
        });
        }
    }).catch((err) => {
        console.log(err);
    });
});

router.get("/:id", (req, res)=>{
    var id = req.params.id;
    events.findWithId(id).then((eventss) => {
        // for each event select fighters
        if(eventss.length <= 0){
            console.log("event dont exist");
            res.render("events",{events:[], size:0});
        }else{
            var fight = new Fight();
            fight = eventss.get(fight);
            var fighters = [];
            athletes.findAll().then((ath1)=>{
                // for each athlete select those whose id are in the event
                ath1.forEach(athlt => {
                    var a1 = new AthletesModel();
                    var at = athlt.get(a1);
                    if(at.id == fight.athlete1){
                        fight.athlete1 = at;
                        fighters.push(at);
                    }
                    if(at.id == fight.athlete2){
                        fight.athlete2 = at;
                        fighters.push(at);
                    }
                });
                console.log("Fighters:: ", fighters);
                res.render("event_details", { event: fight});
            });
        }
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;