const { Sequelize} = require('sequelize');

const Articles = require('../models/articles');
const ArticlesModel = require('../../engine/models/article')
// const Rank = require('../models/ranking');
const Op = Sequelize.Op;
const findAll = async (id) => {
    await Articles.sync();
    return Articles.findAll({where:{news_id:id}});
};
const findAllQuery = async (query) => {
    await Articles.sync();
    return Articles.findAll(
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
const create = async (article = ArticlesModel) => {
    await Articles.sync();
    console.log("From DB: ",article);
    return Articles.create(article);
};
const findWithId = async(id = Number)=>{
    if(typeof id == Number){
        return TypeError("Id should be a number");
    }
    else{
        await Articles.sync();
        return Articles.findOne({
            where: { id },
            order: [ [ 'createdAt', 'DESC' ]],});
    }
}
const update = async(articles = ArticlesModel)=>{

    await Articles.sync();
    if(typeof articles == ArticlesModel){
        return TypeError("articles not of proper type");
    }
    else{
        return Articles.update(articles, {where: { id: articles.id }});
    }

}
const remove = async(articles_id = Number)=>{
    await Articles.sync();
    return Articles.destroy({where:{id:articles_id}});
}


module.exports = {findAll, create, findWithId,update, remove, findAllQuery}