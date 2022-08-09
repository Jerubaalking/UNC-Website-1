const { DataTypes } = require('sequelize');
const { sequelize, Model } = require('./db.js');

class Notice {
  constructor(status = new Boolean(), notification = new String(), data) {
    this.status = status;
    this.notification = notification;
    this.data = data;
  }
}

class _DB {
  constructor(table) {
    this.table = table;
    sequelize.sync();
  }
  async getModel() {
    let { Companies, Services, BattlePasses, Abouts, Slides, News, Articles, Games, Subscribers, Seasons } = await this._model();
    switch (this.table) {
      case "Companies":
        return Companies;
      case "Services":
        return Services;
      case "News":
        return News;
      case "Articles":
        return Articles;
      case "Abouts":
        return Abouts;
      case "Slides":
        return Slides;
      case "Games":
        return Games;
      case "BattlePasses":
        return BattlePasses;
      case "Subscribers":
        return Subscribers;
      case "Seasons":
        return Seasons;
      default:
        break;
    }
  }
  async find() {
    let { Companies, Services,BattlePasses, Abouts, Slides, News, Articles, Games, Subscribers, Seasons } = await this._model();
    switch (this.table) {
      case "Companies":
        return await Companies.findAll();
      case "Services":
        return await Services.findAll();
      case "News":
        return await News.findAll({order:[['createdAt','DESC' ]]});
      case "Articles":
        return await Articles.findAll();
      case "Slides":
        return Slides.findAll();
      case "Abouts":
        return Abouts.findAll();
        case "BattlePasses":
          return BattlePasses.findAll();
      case "Games":
        return Games.findAll();
      case "Subscribers":
        return await Subscribers.findAll();
      case "Seasons":
        return await Seasons.findAll();
      default:
        break;
    }
  }

  async idFind(id = new Number()) {
    let { Companies, Services,BattlePasses, Abouts, Slides, News, Articles, Games, Subscribers, Seasons } = await this._model();
    switch (this.table) {
      case "Companies":
        return await Companies.findOne({ where: { id: id } });
      case "Services":
        return await Services.findOne({ where: { id: id } });
      case "News":
        return await News.findOne({ where: { id: id } });
      case "Seasons":
        return await Seasons.findOne({ where: { id: id } });
      case "Slides":
        return await Slides.findOne({ where: { id: id } });
      case "Articles":
        return await Articles.findOne({ where: { id: id } });
      case "Abouts":
        return await Abouts.findOne({ where: { id: id } });
      case "Games":
        return await Games.findOne({ where: { id: id } });

      case "BattlePasses":
        return await BattlePasses.findOne({ where: { id: id } });
      case "Subscribers":
        return await Subscribers.update(data, { where: { id: id } });
      default:
        break;
    }
  }

  async findWithRelatives() {
    let { Companies, Services, Warriors, BattlePasses, Abouts, Slides, News, Articles, Games, Subscribers, Seasons } = await this._model();
    switch (this.table) {
      case "Companies":
        return await Companies.findAll({ include: { model: Services }});
      case "Services":
        return await Services.findAll({ include: { model: Games }, include: { model: Companies }});
      case "News":
        return await News.findAll({ include: { model: Companies }, include: { model: Articles }, order:[['createdAt','DESC' ]] });
      case "Slides":
        return await Slides.findAll();
      case "Articles":
      return await Articles.findAll({ include: { all: true, nested: true }});
      case "BattlePasses":
        return await BattlePasses.findAll({ include: { all: true, nested: true } });
      case "Warriors":
        return await Warriors.findAll({ include: { all: true, nested: true }});
      case "Abouts":
        return await Abouts.findAll({ include: { all: true, nested: true } });
      case "Games":
        return await Games.findAll({ include: { all: true, nested: true }});
      case "Subscribers":
        return await Subscribers.findAll();
      case "Slides":
        return await Slides.findAll();
      default:
        break;
    }
  }

  async idFindWithRelative(id = new Number()) {
    let { Companies, Services,Warriors, BattlePasses,News, Slides, Abouts, Games, Articles, Subscribers, Seasons } = await this._model();
    switch (this.table) {
      case "Companies":
        return await Companies.findOne({ where: { id: id }, include: { all: true, nested: true }});
      case "Services":
        return await Services.findOne({ where: { id: id },include: { all: true, nested: true }});
      case "News":
        return await News.findOne({ where: { id: id }, include:{ all: true, nested: true }});
      case "Articles":
        return await Articles.findOne({ where: { id: id }, include: { all: true, nested: true } });
        case "BattlePasses":
          return await BattlePasses.findOne({ where: { id: id }, include: { all: true, nested: true } });
      case "Abouts":
        return await Abouts.findOne({ where: { id: id }, include: { all: true, nested: true } });
      case "Warriors":
        return await Warriors.findOne({ where: { id: id }, include: { all: true, nested: true } });
      case "Games":
        return await Games.findOne({ where: { id: id }, include: { all: true, nested: true } });
      case "Slides":
        return await Slides.findOne({ where: { id: id }});
        case "Subscribers":
          return await Subscribers.findOne({ where: { id: id }});
      default:
        break;
    }
  }
  async relatives() {
    // let { Companies, Services,BattlePasses, Slides, News, Articles, Subscribers, Seasons } = await this._model();
    switch (this.table) {
      case "Companies":
        return ["Services"];
      case "Services":
        return ["Companies", "Games"];
      case "News":
        return ["Companies", "Articles"];
      case "Articles":
        return ["News"];
      case "Warriors":
        return ["Games"];
      case "Games":
        return ["Services"];
      case "Abouts":
        return ["Companies"];
        case "BattlePasses":
          return ["Companies"];
      case "Slides":
        return [];
        case "Subscribers":
          return [];
      default:
        break;
    }
  }

  async create(data) {
    let { Companies, Services,Warriors, BattlePasses, Games, Slides, Abouts, News, Articles, Subscribers, Seasons } = await this._model();
    switch (this.table) {
      case "Companies":
        try {
          let groups = await Companies.build(data);
          return await groups.save();
        } catch (err) {
          return err;
        };
      case "Services":
        try {
          let services = await Services.build(data);
          return await services.save();
        } catch (err) {
          return err;
        };
        break;
      case "News":
        try {
          let news = await News.build(data);
          return await news.save();
        } catch (err) {
          return err;
        }
      case "Articles":
        try {
          let articles = await Articles.build(data);
          return await articles.save();
        } catch (err) {
          return err;
        };
      case "Abouts":
        try {
          let abouts = await Abouts.build(data);
          return await abouts.save();
        } catch (err) {
          return err;
        }

      case "BattlePasses":
        try {
          let portfolio = await BattlePasses.build(data);
          return await portfolio.save();
        } catch (err) {
          return err;
        }
      case "Games":
        try {
          let products = await Games.build(data);
          return await products.save();
        } catch (err) {
          return err;
        }
      case "Warriors":
        try {
          let products = await Warriors.build(data);
          return await products.save();
        } catch (err) {
          return err;
        }
      case "Slides":
        try {
          let slides = await Slides.build(data);
          return await slides.save();
        } catch (err) {
          return err;
        }
        break;

      case "Subscribers":
        try {
          let slides = await Subscribers.build(data);
          return await slides.save();
        } catch (err) {
          return err;
        }
      default:
        break;
    }
  }
  async update(id, data) {
    let { Companies,Games, Services,BattlePasses, Abouts, News, Articles, Subscribers, Slides } = await this._model();
    switch (this.table) {
      case "Companies":
        return await Companies.update(data, { where: { id: id } });
        case "Games":
          return await Games.update(data, { where: { id: id } });
      case "Services":
        return await Services.update(data, { where: { id: id } });
      case "News":
        return await News.update(data, { where: { id: id } });
      case "Articles":
        return await Articles.update(data, { where: { id: id } });
        case "BattlePasses":
          return await BattlePasses.update(data, { where: { id: id } });
      case "Abouts":
        return await Abouts.update(data, { where: { id: id } });
      case "Subscribers":
        return await Subscribers.update(data, { where: { id: id } });
        case "Slides":
          return await Slides.update(data, { where: { id: id } });
      default:
        break;
    }
  }
  /** Delete Objects
   * @param id
   */
  async trash(id = new Number()) {
    let { Companies, Services,BattlePasses, News, Articles, Subscribers, Slides } = await this._model();
    switch (this.table) {
      case "Companies":
        return await Companies.destroy({ where: { id: id } });
      case "Services":
        return await Services.destroy({ where: { id: id } });
      case "News":
        return await News.destroy({ where: { id: id } });
      case "Articles":
        return await Articles.destroy({ where: { id: id } });
        case "BattlePasses":
          return await BattlePasses.destroy({ where: { id: id } });
      case "Subscribers":
        return await Subscribers.destroy({ where: { id: id } });
      case "Slides":
        return await Slides.destroy({ where: { id: id } });
      default:
        break;
    }
  }

  /** Restore Objects
   * @param id
   */
  async restore(id = new Number()) {
    let { Companies, Services,BattlePasses, News, Articles, Subscribers, Seasons } = await this._model();
    switch (this.table) {
      case "Companies":
        return await Companies.update({ deleteAt: null }, { where: { id: id } });
      case "Services":
        return await Services.update({ deleteAt: null }, { where: { id: id } });
        case "BattlePasses":
          return await BattlePasses.update({ deleteAt: null }, { where: { id: id } });
      case "News":
        return await News.update({ deleteAt: null }, { where: { id: id } });
      case "Articles":
        return await Articles.update({ deleteAt: null }, { where: { id: id } });
      case "Subscribers":
        return await Subscribers.update({ deleteAt: null }, { where: { id: id } });
      case "Seasons":
        return await Seasons.update({ deleteAt: null }, { where: { id: id } });
      default:
        break;
    }
  }
  async delete(id = new Number()) {
    let { Companies, Services,Warriors, BattlePasses, News, Abouts, Articles, Subscribers, Slides } = await this._model();
    switch (this.table) {
      case "Companies":
        try{
          await Companies.destroy({ where: { id: id } }, { force: true });
          let note = new Notice(true, `Item parmanently deleted!`);
          return note;
        }catch(err){
          let note = new Notice(false, `failed to delete ${this.table} item!`, err);
          return note;
        }
      case "Services":
        try{
          await Services.destroy({ where: { id: id } }, { force: true });
          let note = new Notice(true, `Item parmanently deleted!`);
          return note;
        }catch(err){
          let note = new Notice(false, `failed to delete ${this.table} item!`, err);
          return note;
        }
        case "BattlePasses":
          try{
            await BattlePasses.destroy({ where: { id: id } }, { force: true });
            let note = new Notice(true, `Item parmanently deleted!`);
            return note;
          }catch(err){
            let note = new Notice(false, `failed to delete ${this.table} item!`, err);
            return note;
          }
      case "News":
        try{
          await News.destroy({ where: { id: id } }, { force: true });
          let note = new Notice(true, `Item parmanently deleted!`);
          return note;
        }catch(err){
          let note = new Notice(false, `failed to delete ${this.table} item!`, err);
          return note;
        }
      case "Articles":
        try{
          await Articles.destroy({ where: { id: id } }, { force: true });
          let note = new Notice(true, `Item parmanently deleted!`);
          return note;
        }catch(err){
          let note = new Notice(false, `failed to delete ${this.table} item!`, err);
          return note;
        }
      case "Warriors":
        try{
          await Warriors.destroy({ where: { id: id } }, { force: true });
          let note = new Notice(true, `Item parmanently deleted!`);
          return note;
        }catch(err){
          let note = new Notice(false, `failed to delete ${this.table} item!`, err);
          return note;
        }
      case "Abouts":
        try{
          await Abouts.destroy({ where: { id: id } }, { force: true });
          let note = new Notice(true, `Item parmanently deleted!`);
          return note;
        }catch(err){
          let note = new Notice(false, `failed to delete ${this.table} item!`, err);
          return note;
        }
      case "Subscribers":
        try{
          await Subscribers.destroy({ where: { id: id } }, { force: true });
          let note = new Notice(true, `Item parmanently deleted!`);
          return note;
        }catch(err){
          let note = new Notice(false, `failed to delete ${this.table} item!`, err);
          return note;
        }
      case "Slides":
        try{
          await Slides.destroy({ where: { id: id } }, { force: true });
          let note = new Notice(true, `Item parmanently deleted!`);
          return note;
        }catch(err){
          let note = new Notice(false, `failed to delete ${this.table} item!`, err);
          return note;
        }
      default:
        break;
    }
  }

  async _model() {
    class Companies extends Model { };
    class Services extends Model { };
    class News extends Model { };
    class Abouts extends Model { };
    class Articles extends Model { };
    class Slides extends Model { };
    class Games extends Model { };
    class Modes extends Model { };
    class BattlePasses extends Model { };
    class Seasons extends Model { };
    class Subscribers extends Model { };
    class Warriors extends Model { };

    Companies = sequelize.define('companies', {
      name: {
        type: DataTypes.STRING,
      },
      logo: {
        type: DataTypes.STRING,
      },
      description: DataTypes.TEXT,
      address: DataTypes.TEXT,
      contacts: DataTypes.TEXT
    }, { paranoid: true });

    Warriors = sequelize.define('warriors', {
      name: {
        type: DataTypes.STRING,
        unique: true
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      description: DataTypes.TEXT,
    }, { paranoid: true });

    News = sequelize.define('news', {
      title: {
        type: DataTypes.STRING,
        unique: true
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      description: DataTypes.TEXT,
    }, { paranoid: true });


    Slides = sequelize.define('slides', {
      title: {
        type: DataTypes.STRING,
        unique: true
      },
      caption: {
        type: DataTypes.STRING
      },
      imageUrl: {
        type: DataTypes.STRING,
      }
    }, { paranoid: true });

    Articles = sequelize.define('articles', {
      title: {
        type: DataTypes.STRING
      },
      caption: {
        type: DataTypes.STRING
      },
      author: {
        type: DataTypes.STRING
      },
      article: {
        type: DataTypes.STRING
      }
    }, { paranoid: true });

    Modes = sequelize.define('modes', {
      name: {
        type: DataTypes.STRING,
        unique:true
      },
      descriptions: {
        type: DataTypes.STRING
      },
    }, { paranoid: true });

    BattlePasses = sequelize.define('battle_passes', {
      name: {
        type: DataTypes.STRING,
        unique:true
      },
      descriptions: {
        type: DataTypes.STRING
      },
    }, { paranoid: true });


    Seasons = sequelize.define('seasons', {
      name: {
        type: DataTypes.STRING,
        unique:true
      },
      descriptions: {
        type: DataTypes.STRING
      },
    }, { paranoid: true });

    Abouts = sequelize.define('abouts', {
      address: {
        type: DataTypes.STRING,
      },
      website: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      phone: {
        type: DataTypes.STRING,
        unique: true
      },
      about: {
        type: DataTypes.STRING
      },
    }, { paranoid: true });
    Subscribers = sequelize.define('subscribers', {
      name: {
        type: DataTypes.STRING,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      comments: {
        type: DataTypes.STRING
      },
    }, { paranoid: true });
    Games = sequelize.define('games', {
      name: {
        type: DataTypes.STRING,
      },
      details: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING
      },
      imageUrl: {
        type: DataTypes.STRING
      },
    }, { paranoid: true });
    Services = sequelize.define('services', {
      name: {
        type: DataTypes.STRING,
      },
      details: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING
      },
      imageUrl: {
        type: DataTypes.STRING
      },
    }, { paranoid: true});

    
    /** Relationship initialization */


    await Services.belongsTo(Companies);
    await Companies.hasMany(Services);

    await Games.belongsTo(Companies);
    await Companies.hasMany(Games);

    await Seasons.belongsTo(Games);
    await Games.hasMany(Seasons);

    await BattlePasses.belongsTo(Games);
    await Games.hasMany(BattlePasses);

    await Abouts.belongsTo(Companies);
    await Companies.hasMany(Abouts);

    await News.belongsTo(Companies);
    await Companies.hasMany(News);

    await Warriors.belongsTo(Games);
    await Games.hasMany(Warriors);

    await Articles.belongsTo(News);
    await News.hasMany(Articles);


    return { Companies, Warriors, BattlePasses, Abouts, Services, Slides, News, Articles, Games, Subscribers, Seasons };
  }

}


module.exports = { _DB, sequelize };
