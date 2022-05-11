
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`sqlite::${__dirname}/../../database/dev.db`);

class Rank extends Model {
}
Rank.init({
  title: DataTypes.STRING,
  weight: DataTypes.STRING
}, { sequelize, modelName: 'ranks' });
// Rank.hasOne(Athlete);
Rank.sync();

module.exports = Rank;