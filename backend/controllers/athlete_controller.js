const { Sequelize} = require('sequelize');

const Athletes = require('../models/athlete');
const AthletesModel = require('../../engine/models/athlete')
const Rank = require('../models/ranking');
const Op = Sequelize.Op;
const findAll = async () => {
    await Athletes.sync();
    return Athletes.findAll();
};
const findAllQuery = async (query) => {
    await Athletes.sync();
    return Athletes.findAll(
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
const create = async (athlete = AthletesModel) => {
    await Athletes.sync();
    // console.log("Controller Athlete Modal Data: ",athlete);
    return Athletes.create(athlete);
    // const athleteBuilt = Athletes.build(athlete);
    // // console.log(ath instanceof Athletes);
    // await athleteBuilt.save();
    // console.log(athleteBuilt.firstname,' was saved to the athletes Table!');
    // return Athletes.findAll();
};
const findWithId = async(id = Number)=>{
    if(typeof id == Number){
        return TypeError("Id should be a number");
    }
    else{
        await Athletes.sync();
        return Athletes.findOne({
            where: { id },
            order: [ [ 'createdAt', 'DESC' ]],});
    }
}
const update = async(athletes = AthletesModel)=>{
    if(typeof athletes == AthletesModel){
        return TypeError("athletes not of proper type");
    }
    else{
        await Athletes.sync();
        return Athletes.update(athletes, {where: { id: athletes.id }});
    }

}
const remove = async(athletes_id = Number)=>{
    await Athletes.sync();
    return Athletes.destroy({where:{id:athletes_id}});
}
const addRank = async(ath1 = Rank)=>{
    await Rank.sync();
    const ath = Rank.build({ rank: "lightweight"});
    console.log(ath instanceof Rank);
    await ath.save();
    console.log(ath.rank,' was saved to the database!');

}

module.exports = {findAll, create, findWithId,update, remove, addRank, findAllQuery}