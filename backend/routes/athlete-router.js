const express = require('express');
const router = express.Router();
const athlete = require('../controllers/athlete_controller');
const Athlete = require('../../engine/models/athlete');

router.get('/', (req, res)=>{
    var athletes = [];
    athlete.findAll().then((ath)=>{
        if(ath.length <= 0){
            
        }else{
            athletes.push(ath);
        }
    });
    // athlete.create();

    res.render('athletes', {data:athletes});
});
router.get("/all", (req, res) => {
    console.log(req.query);
    var query = req.query;
    if(query){ 
        var athleteData = [];
        athlete.findAllQuery(query).then((athletes)=>{
            var athletee = new Athlete();
            console.log("Athlete:: ",athletes);
            athletes.forEach(athlette => {
                athleteData.push(athlette.get(athletee));
            });
        res.render("all_athletes", { data: athleteData });
        });
    }else{
        var athleteData = [];
        athlete.findAll().then((athletes)=>{
            var athletee = new Athlete();
            athletes.forEach(athlette => {
                athleteData.push(athlette.get(athletee));
            });
        res.render("all_athletes", { data: athleteData });
        });
    }
   
});


router.post('/add', (req, res)=>{
    // req,body
    var athl = new Athlete();
    athl = req.body;
    athlete.create(athl).then((ath)=>{
        athletes.push(ath);
    });

    res.render('athletes', {data:athletes});
});



router.get('/profile/:id', (req, res)=>{
    var id = req.params.id;
    // req,body
    var athl = new Athlete();
    athlete.findWithId(id).then((ath)=>{
        athl = ath.get(athl);
        res.render('athlete', {athlete:athl});
    });

});

module.exports = router;