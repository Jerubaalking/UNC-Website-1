class Fitness {
    constructor(
        title = 'title' ||new String(),
        imageUrl = 'imageUrl' ||new String(),
        imagePosition = 'imagePosition' ||new String(),
        linkto = 'linkto' ||new String(),
        details = 'details' ||new String()
     
    ) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.imagePosition = imagePosition;

        this.linkto = linkto

        this.details = details;

    }
}
module.exports = Fitness;
