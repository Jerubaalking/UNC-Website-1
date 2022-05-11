class Fight {
    static title = new String();
    venue = new String();
    athlete1 = new String();
    athlete2 = new String();
    hero = new String();
    date = Date();
    constructor(athlete1 ='athlete1', athlete2 ='athlete2', hero = 'hero'|| new String(), street = 'street', region = 'region', time='time', date = 'date'||new Date(),venue = "venue"){
       this.athlete1 = athlete1;
       this.athlete2 = athlete2;
       this.hero = hero;
       this.street = street;
       this.region = region;
       this.date =date;
       this.time =time;
       this.venue =venue;
       this.title = athlete1+" vs "+athlete2;
    }
    
}
module.exports = {Fight};