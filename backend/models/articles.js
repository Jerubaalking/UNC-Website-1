
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`sqlite::${__dirname}/../../database/dev.db`);

class Article extends Model {
}
Article.init({
  news_id: DataTypes.NUMBER,
  heading: DataTypes.STRING,
  article: DataTypes.STRING,
}, { sequelize, modelName: 'articles' });
// Athlete.hasMany(Event);
module.exports = Article;