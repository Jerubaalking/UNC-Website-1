class Article {
    news_id = new Number();
    heading = new String();
    article = new String();
    updatedAt = new Date();
    constructor(news_id ='news_id', heading ='heading', article = 'article'){
       this.news_id = news_id;
       this.heading = heading;
       this.article = article;
    }
    
}
module.exports = Article;