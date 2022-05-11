const Athlete = require("./athlete");

class Events extends Athlete{
    constructor(id = String(),imageUrl = String(), title = String(), description =String(), details = String(), datetime =Date()){
        this.id = id;
        this.imageUrl = imageUrl;
        this.title = title;
        this.description = description;
        this.details = details;
        this.datetime = datetime;
    }
    
}
var t = new News();
module.exports = News;