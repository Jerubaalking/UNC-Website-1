// const { Sequelize, Model, DataTypes } = require('sequelize');

const Role = require('../models/role');


const findAll = async () => {
    await Role.sync();
    return Role.findAll();
};
const create = async (athl = Role) => {
    await Role.sync();
    const ath = Role.build({ role: "super-admin", description:"main admin" });
    console.log(ath instanceof Role);
    await ath.save();
    console.log(ath.role,' was saved to the database!');
    return Role.findAll();
};

module.exports = {findAll, create}