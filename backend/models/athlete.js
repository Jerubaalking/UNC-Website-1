
const { Sequelize, Model, DataTypes } = require('sequelize');
const Rank = require('./ranking');
const sequelize = new Sequelize(`sqlite::${__dirname}/../../database/dev.db`);

class Athlete extends Model {
}
Athlete.init({
  headImage: DataTypes.STRING,
  bodyImage: DataTypes.STRING,
  firstname: DataTypes.STRING,
  sirname: DataTypes.STRING,
  email:DataTypes.STRING,
  region: DataTypes.STRING,
  gym: DataTypes.STRING,
  gender: DataTypes.STRING,
  birthdate: DataTypes.DATE,
  style: DataTypes.STRING,
  height: DataTypes.STRING,
  weight: DataTypes.STRING,
  region: DataTypes.STRING,
  country: DataTypes.STRING,
  handreach: DataTypes.STRING,
  legreach: DataTypes.STRING,
  socials: DataTypes.STRING
}, { sequelize, modelName: 'athlete' });
// Rank.hasOne(Athlete);
module.exports = Athlete;