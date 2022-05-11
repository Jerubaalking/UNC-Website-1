class AboutMMA{
    static imageUrl = new String();
    static details = new String();
    constructor(imageUrl = new String(),details = new String()){
        this.imageUrl = imageUrl;
        this.details = details;
    }
}
class AboutTeam{
    static imageUrl = new String();
    static details = new String();
    constructor(imageUrl = new String(), details = new String()){
        this.imageUrl = imageUrl;
        this.details = details;
    }
}
class AboutSport{
    static imageUrl = new String();
    static details = new String();
    constructor(imageUrl = new String(), details = new String()){
        this.imageUrl = imageUrl;
        this.details = details;
    }
}
class AboutOlympics{
    static imageUrl = new String();
    static details = new String();
    constructor(imageUrl = new String(), details = new String()){
        this.imageUrl = imageUrl;
        this.details = details;
    }
}
module.exports = {AboutMMA, AboutTeam, AboutSport,AboutOlympics}