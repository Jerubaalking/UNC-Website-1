
const { Sequelize, Model, DataTypes } = require('sequelize');
const Athlete = require('./athlete');
const sequelize = new Sequelize(`sqlite::${__dirname}/../../database/dev.db`);

class Event extends Model {
}
Event.init({
  athlete1: DataTypes.STRING,
  athlete2: DataTypes.STRING,
  hero: DataTypes.STRING,
  venue: DataTypes.STRING,
  street: DataTypes.STRING,
  region: DataTypes.STRING,
  details: DataTypes.STRING,
  date: DataTypes.DATE,
  time: DataTypes.TIME
}, { sequelize, modelName: 'event' });
// Athlete.hasMany(Event);
module.exports = Event;