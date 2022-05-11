class Athlete {
    constructor(
        headImage = 'headImage' || String(),
        bodyImage = 'bodyImage' || String(),
        firstname = 'firstname' || String(),
        sirname = 'sirname' || String(),
        gender = 'gender' || String(),
        email = 'email' || String(),
        region = 'region' || String(),
        gym = 'gym' || String(),
        birthdate = 'birthdate' || Date(),
        style = 'style' || String(),
        height = 'height' || String(),
        weight = 'weight' || String(),
        country = 'country' || String(),
        handreach = 'handreach' || String(),
        legreach = 'legreach' || String(),
        socials = 'socials' || String()
    ) {
        this.headImage = headImage;
        this.bodyImage = bodyImage;
        this.firstname = firstname;

        this.sirname = sirname

        this.email = email;

        this.region = region;

        this.gender = gender;

        this.gym = gym;

        var d = new Date();
        d.setDate(birthdate);
        this.birthdate = d.getDate();

        this.style = style;

        this.height = height;
        this.weight = weight;

        this.country = country;

        this.handreach = handreach;

        this.legreach = legreach;
        this.socials = socials.toString();
    }
    getAge(){
        
        var ageInMilliseconds = new Date() - new Date(this.birthdate);
        return Math.floor(ageInMilliseconds/1000/60/60/24/365);
    }
}
// var d = new Date();
// d.setDate(7);
// d.setMonth(8);
// d.setFullYear(1991);
// console.log(d);
var t = new Athlete();
// t.birthdate = d;
// console.log(t);
module.exports = Athlete;
