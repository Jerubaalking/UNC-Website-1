
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`sqlite::${__dirname}/../../database/dev.db`);

class Images extends Model {
}
Images.init({
  athlete_id: DataTypes.NUMBER,
  news_id: DataTypes.NUMBER,
  event_id: DataTypes.NUMBER,
  imageUrl: DataTypes.STRING,
}, { sequelize, modelName: 'images' });
Images.sync();
module.exports = Images;