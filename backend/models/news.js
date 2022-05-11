
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`sqlite::${__dirname}/../../database/dev.db`);
class News extends Model{
}
News.init({
    imageUrl: DataTypes.STRING,
    title:DataTypes.STRING,
    author:DataTypes.STRING,
    sub_title:DataTypes.STRING,
    description: DataTypes.STRING,
    details: DataTypes.STRING,
  }, { sequelize, modelName: 'news' });
module.exports = News;