const { _DB } = require("../../../database/schemas");
const helper = require("./helper");

const capitalize = s => s.replace(/./, c => c.toUpperCase());
module.exports = {
    /** Service
     * This is used by the router controller to retrive database objects for serving the view
     */
    create: async (model) => {
        try {
            let models = await new _DB(model);
            let data = await models.findWithRelatives();
            let relatives = await models.relatives();
            data = JSON.parse(JSON.stringify(data));
            let u = new Object();
            u.layout = false;
            u[model] = data;
            if(relatives.length<=0){
                console.log("data at serve", u);
                return u;
            }else{
                let helps = relatives;
                console.log("helps::", helps);
                if (helps != undefined && helps.length >0) {
                    for (let i = 0; i < helps.length; i++) {
                        let db = new _DB(helps[i]);
                        u[helps[i]] = JSON.parse(JSON.stringify(await db.find()));
                    };
                    console.log("data at serve", u);
                    return u;
                }else{
                    return u;
                }
            }
            
        } catch (err) {
            console.log("ERRor:", err);
        }
    },
    /** Service
     * This is used by the router controller to retrive database objects for serving the view
     */
     edit: async (model, id) => {
        try {
            let models = await new _DB(model);
            let data = await models.idFindWithRelative(id);
            let relatives = await models.relatives();
            data = JSON.parse(JSON.stringify(data));
            let u = new Object();
            u.layout = false;
            u[model] = data;
            if(relatives.length<=0){
                console.log("data at serve", u);
                return u;
            }else{
                let helps = relatives;
                console.log("helps::", helps);
                if (helps != undefined && helps.length >0) {
                    for (let i = 0; i < helps.length; i++) {
                        let db = new _DB(helps[i]);
                        u[helps[i]] = JSON.parse(JSON.stringify(await db.find()));
                    };
                    console.log("data at serve", u);
                    return u;
                }else{
                    return u;
                }
            }
            
        } catch (err) {
            console.log("ERRor:", err);
        }
    },

}