
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`sqlite::${__dirname}/../../database/dev.db`);

class Fitness extends Model {
}
Fitness.init({
  title: DataTypes.STRING,
  imageUrl: DataTypes.STRING,
  imagePosition:DataTypes.STRING,
  linkto: DataTypes.STRING,
  details: DataTypes.STRING,
}, { sequelize, modelName: 'fitness' });
// Athlete.hasMany(Event);
module.exports = Fitness;