
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`sqlite::${__dirname}/../../database/dev.db`);

class Role extends Model {
}
Role.init({
  role: DataTypes.STRING,
  description:DataTypes.STRING,
  active:DataTypes.BOOLEAN,
  deleted:DataTypes.BOOLEAN
}, { sequelize, modelName: 'roles' });
Role.sync();
module.exports = Role;