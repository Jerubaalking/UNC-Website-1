
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`sqlite::${__dirname}/../../database/dev.db`);

class AboutMMA extends Model {
}
AboutMMA.init({
  imageUrl:DataTypes.STRING,
  details: DataTypes.TEXT,
}, { sequelize, modelName: 'aboutmma' });

class AboutTeam extends Model {
}
AboutTeam.init({
  imageUrl:DataTypes.STRING,
  details: DataTypes.TEXT,
}, { sequelize, modelName: 'aboutteam' });

class AboutSport extends Model {
}
AboutSport.init({
  details: DataTypes.TEXT,
  imageUrl:DataTypes.STRING,
}, { sequelize, modelName: 'aboutsport' });

class AboutOlympics extends Model {
}
AboutOlympics.init({
  imageUrl:DataTypes.STRING,
  details: DataTypes.TEXT,
}, { sequelize, modelName: 'aboutolympics' });
// Athlete.hasMany(Event);
module.exports = {AboutMMA, AboutTeam,AboutSport,AboutOlympics};