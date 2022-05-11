

class News{
    constructor(
        imageUrl='imageUrl'||String(),
        title='title'||String(),
        author = 'author'|| String(),
        sub_title='sub_title'||String(),
        description='description'|| String(),
        details = 'details'||String(),
        ){
            this.imageUrl = imageUrl;
            this.title = title;
            this.author = author;
            this.sub_title = sub_title;
            this.description = description;
            this.details = details;
    }
}
module.exports = News;
