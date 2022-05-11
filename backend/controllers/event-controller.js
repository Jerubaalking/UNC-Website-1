const { Sequelize} = require('sequelize');

const Events = require('../models/event');
const EventsModel = require('../../engine/models/event')
// const Rank = require('../models/ranking');
const Op = Sequelize.Op;
const findAll = async () => {
    await Events.sync();
    return Events.findAll();
};
const findAllQuery = async (query) => {
    await Events.sync();
    return Events.findAll(
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
const create = async (event = EventsModel) => {
    await Events.sync();
    // console.log("Controller Event Modal Data: ",event);
    return Events.create(event);
    // const eventBuilt = Events.build(event);
    // // console.log(ath instanceof Events);
    // await eventBuilt.save();
    // console.log(eventBuilt.firstname,' was saved to the events Table!');
    // return Events.findAll();
};
const findWithId = async(id = Number)=>{
    if(typeof id == Number){
        return TypeError("Id should be a number");
    }
    else{
        await Events.sync();
        return Events.findOne({
            where: { id },
            order: [ [ 'createdAt', 'DESC' ]],});
    }
}
const update = async(events = EventsModel)=>{
    if(typeof events == EventsModel){
        return TypeError("events not of proper type");
    }
    else{
        return await Events.update(events, {where: { id: events.id }});
    }

}
const remove = async(events_id = Number)=>{
    await Events.sync();
    return Events.destroy({where:{id:events_id}});
}
// const addRank = async(ath1 = Rank)=>{
//     await Rank.sync();
//     const ath = Rank.build({ rank: "lightweight"});
//     console.log(ath instanceof Rank);
//     await ath.save();
//     console.log(ath.rank,' was saved to the database!');

// }

module.exports = {findAll, create, findWithId,update, remove, findAllQuery}