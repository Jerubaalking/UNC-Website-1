const express = require('express');
const router = express.Router();
const fitness = require('../controllers/fitness_controller');
const Fitness = require('../../engine/models/fitness');

router.get('/', (req, res)=>{
    var fitnesses = [];
    fitness.findAll().then((fitnessess)=>{
        if(fitnessess.length <= 0){
            
        }else{
            fitnessess.forEach(fit => {
                
                var fitnes = new Fitness();
                fitnesses.push(fit.get(fitnes));
            });
        }
        console.table(fitnesses);
        res.render('fitness', {fitnesses:fitnesses});
    });
    // fitness.create();

});
router.get("/all", (req, res) => {
    console.log(req.query);
    var query = req.query;
    if(query){ 
        var fitnessData = [];
        fitness.findAllQuery(query).then((fitnesses)=>{
            var fitnesse = new Fitness();
            console.log("Fitness:: ",fitnesses);
            fitnesses.forEach(athlette => {
                fitnessData.push(athlette.get(fitnesse));
            });
        res.render("all_fitnesses", { data: fitnessData });
        });
    }else{
        var fitnessData = [];
        fitness.findAll().then((fitnesses)=>{
            var fitnesse = new Fitness();
            fitnesses.forEach(athlette => {
                fitnessData.push(athlette.get(fitnesse));
            });
        res.render("all_fitnesses", { data: fitnessData });
        });
    }
   
});


router.post('/add', (req, res)=>{
    // req,body
    var athl = new Fitness();
    athl = req.body;
    fitness.create(athl).then((ath)=>{
        fitnesses.push(ath);
    });

    res.render('fitnesses', {data:fitnesses});
});



router.get('/profile/:id', (req, res)=>{
    var id = req.params.id;
    // req,body
    var athl = new Fitness();
    fitness.findWithId(id).then((ath)=>{
        athl = ath.get(athl);
        res.render('fitness', {fitness:athl});
    });

});

module.exports = router;