// const { Sequelize, Model, DataTypes } = require('sequelize');

const News = require('../models/news');
const NewsModel = require('../../engine/models/news');

const findAll = async () => {
    await News.sync();
    return News.findAll();
};
const create = async (athl = NewsModel) => {
    await News.sync();
    const ath = News.build(athl);
    console.log(ath instanceof News);
    await ath.save();
    console.log(ath.title,' was saved to the news Table!');
    return News.findAll();
};
const findWithId = async(id = Number)=>{
    if(typeof id == Number){
        return TypeError("Id should be a number");
    }
    else{
        await News.sync();
        return News.findOne({
            where: { id },
            order: [ [ 'createdAt', 'DESC' ]],});
    }
}
const update = async(news = NewsModel)=>{
    if(typeof news == NewsModel){
        return TypeError("news not of proper type");
    }
    else{
        await News.sync();
        return News.update(news, {where: { id: news.id }});
    }

}
const remove = async(news_id = Number)=>{
    // await News.sync();
    return News.destroy({where:{id:news_id}}).catch((err)=>{
        if(err){
            var error = {
                status:false,
                notification:"failed to remove news",
                sqlerr:"SQL DB ERROR: "+err
            }
            console.log(error);
        }
    });
}
module.exports = {findAll, create, findWithId,update, remove}