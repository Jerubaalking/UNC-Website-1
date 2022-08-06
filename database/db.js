const {Sequelize, Model} = require('sequelize');
const sequelize = new Sequelize(`sqlite::${__dirname}/uncaptured.db`, {
  logging:false
});
module.exports = {sequelize, Model};