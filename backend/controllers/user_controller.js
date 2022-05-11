// const { Sequelize, Model, DataTypes } = require('sequelize');

const User = require('../models/user');
const UserModel = require('../../engine/models/user');


const findAll = async () => {
    await User.sync();
    return User.findAll();
};
const create = async (athl = UserModel) => {
    await User.sync();
    const ath = User.build(athl);
    console.log(ath instanceof User);
    await ath.save();
    console.log(ath.fullname,' was saved to the database!');
    return User.findAll();
};

module.exports = {findAll, create}