const { Sequelize} = require('sequelize');

const {AboutMMA, AboutTeam, AboutSport, AboutOlympics} = require('../models/about');
const AboutModel = require('../../engine/models/about')
// const Rank = require('../models/ranking');
const Op = Sequelize.Op;
const findAll = async (about, type) => {
    if(type == "mma"){
        await AboutMMA.sync();
        return AboutMMA.findAll();
    }
    if(type == "team"){
        await AboutTeam.sync();
        return AboutTeam.findAll();
    }
    if(type == "sport"){
        await AboutSport.sync();
        return AboutSport.findAll();
    }
    if(type =="olympics"){
        await AboutOlympics.sync();
        return AboutOlympics.findAll();
    }
}
const create = async (about, type) => {
    if(type == "mma"){
        await AboutMMA.sync();
        // console.log("From DB: ",about);
        return AboutMMA.create(about);
    }
    if(type == "team"){
        await AboutTeam.sync();
        // console.log("From DB: ",about);
        return AboutTeam.create(about);
    }
    if(type == "sport"){
        await AboutSport.sync();
        // console.log("From DB: ",about);
        return AboutSport.create(about);
    }
    if(type == "olympics"){
        await AboutOlympics.sync();
        // console.log("From DB: ",about);
        return AboutOlympics.create(about);
    }
};
const findWithId = async(id = Number, model)=>{
    if(model == AboutModel.AboutMMA()){
        await AboutMMA.sync();
        return AboutMMA.findOne({
            where: { id },
            order: [ [ 'createdAt', 'DESC' ]],});
    }
    if(model == AboutModel.AboutTeam()){
        await AboutTeam.sync();
        return AboutTeam.findOne({
            where: { id },
            order: [ [ 'createdAt', 'DESC' ]],});
    }
    if(model == AboutModel.AboutSport()){
        await AboutSport.sync();
        return AboutSport.findOne({
            where: { id },
            order: [ [ 'createdAt', 'DESC' ]],});
    }
    if(model == AboutModel.AboutOlympics()){
        await AboutOlympics.sync();
        return AboutOlympics.findOne({
            where: { id },
            order: [ [ 'createdAt', 'DESC' ]],});
    }
    
}
const update = async(about, type)=>{

    if(type == "mma"){
        await AboutMMA.sync();
        return AboutMMA.update(about, {where: { id: about.id }});
    }
    if(type == "team"){
        await AboutTeam.sync();
        return AboutTeam.update(about, {where: { id: about.id }});
    }
    if(type == "sport"){
        await AboutSport.sync();
        return AboutSport.update(about, {where: { id: about.id }});
    }
    if(type == "olympics"){
        await AboutOlympics.sync();
        return AboutOlympics.update(about, {where: { id: about.id }});
    }

}
const remove = async(about_id = Number, about)=>{
    if(about == AboutModel.AboutMMA()){
        await AboutMMA.sync();
        return AboutMMA.destroy({where:{id:about_id}});
    }
    if(about == AboutModel.AboutTeam()){
        await AboutTeam.sync();
        return AboutTeam.destroy({where:{id:about_id}});
    }
    if(about == AboutModel.AboutSport()){
        await AboutSport.sync();
        return AboutSport.destroy({where:{id:about_id}});
    }
    if(about == AboutModel.AboutOlympics()){
        await AboutOlympics.sync();
        return AboutOlympics.destroy({where:{id:about_id}});
    }
}


module.exports = {findAll, create, findWithId,update, remove}