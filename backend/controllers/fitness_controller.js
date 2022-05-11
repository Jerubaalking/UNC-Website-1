const { Sequelize} = require('sequelize');

const Fitnesses = require('../models/fitness');
const FitnessesModel = require('../../engine/models/fitness')
const Rank = require('../models/ranking');
const Op = Sequelize.Op;
const findAll = async () => {
    await Fitnesses.sync();
    return Fitnesses.findAll();
};
const findAllQuery = async (query) => {
    await Fitnesses.sync();
    return Fitnesses.findAll(
        {
            where:{
                [Op.or]:[
                    {
                        firstname:{
                            [Op.like]:`%${query.name}%`
                        }
                    },
                    {
                        sirname:{
                            [Op.like]:`%${query.name}%`
                        }
                    },
                    {
                        style:{
                            [Op.like]:`%${query.style}%`
                        }
                    }
                ],
            }
        });
    }
const create = async (fitness = FitnessesModel) => {
    await Fitnesses.sync();
    // console.log("Controller Fitness Modal Data: ",fitness);
    return Fitnesses.create(fitness);
    // const fitnessBuilt = Fitnesses.build(fitness);
    // // console.log(ath instanceof Fitnesses);
    // await fitnessBuilt.save();
    // console.log(fitnessBuilt.firstname,' was saved to the fitnesses Table!');
    // return Fitnesses.findAll();
};
const findWithId = async(id = Number)=>{
    if(typeof id == Number){
        return TypeError("Id should be a number");
    }
    else{
        await Fitnesses.sync();
        return Fitnesses.findOne({
            where: { id },
            order: [ [ 'createdAt', 'DESC' ]],});
    }
}
const update = async(fitnesses = FitnessesModel)=>{
    if(typeof fitnesses == FitnessesModel){
        return TypeError("fitnesses not of proper type");
    }
    else{
        await Fitnesses.sync();
        return Fitnesses.update(fitnesses, {where: { id: fitnesses.id }});
    }

}
const remove = async(fitnesses_id = Number)=>{
    await Fitnesses.sync();
    return Fitnesses.destroy({where:{id:fitnesses_id}});
}
const addRank = async(ath1 = Rank)=>{
    await Rank.sync();
    const ath = Rank.build({ rank: "lightweight"});
    console.log(ath instanceof Rank);
    await ath.save();
    console.log(ath.rank,' was saved to the database!');

}

module.exports = {findAll, create, findWithId,update, remove, addRank, findAllQuery}