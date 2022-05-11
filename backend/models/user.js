
const { Sequelize, Model, DataTypes } = require('sequelize');
const Role = require('./role');
const sequelize = new Sequelize(`sqlite::${__dirname}/../../database/dev.db`);

class User extends Model {
}
User.init({
  fullname: DataTypes.STRING,
  email:DataTypes.STRING,
  phone:DataTypes.STRING,
  password:DataTypes.STRING,
  active:DataTypes.BOOLEAN,
  deleted:DataTypes.BOOLEAN
}, { sequelize, modelName: 'users' });
Role.hasOne(User);
User.sync();
module.exports = User;