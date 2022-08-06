const { _DB } = require("../../../database/schemas");
const helper = require("./helper");

const capitalize = s => s.replace(/./, c => c.toUpperCase());
module.exports = {
    /** Service
     * This is used by the router controller to retrive database objects for serving the view
     */
    create: async (model) => {
        try {
            var models = new _DB(model);
            console.log("create service: ", model);
            var data = await models.findWithRelatives();
            var u = new Object();
            u.layout = false;
            if(data != undefined){
                if(data.length>0){
                    data = JSON.parse(JSON.stringify(data));
                    var helps = await helper.create(data);
                    console.log("helps::", helps);
                    if (helps != undefined) {
                        for (let i = 0; i < helps.length; i++) {
                            let db = new _DB(helps[i]);
                            u[helps[i]] = JSON.parse(JSON.stringify(await db.find()));
                        };
                    }
                }else{
                    data = await models.relatives();
                    console.log("relatives",data);
                    for(var d = 0; d<data.length;d++){
                        console.log("D::",JSON.stringify(data[d]).split(':')[0]);
                        var db1 = new _DB(data[d]);
                        u[data[d].toString().split(':')[0]] = JSON.parse(JSON.stringify(await db1.find()));
                    };
                    console.log("model", data);
                }
            }
            console.log("U value::",u);
            return u;
            
        } catch (err) {
            console.log("ERRor:", err);
        }
    },
    /** Service
     * This is used by the router controller to retrive database objects for serving the view
     */
     edit: async (model, id) => {
        try {

            var models = new _DB(model);
            var data = await models.idFindWithRelative(id);
            data = JSON.parse(JSON.stringify(data));
            var u = new Object();
            u.layout = false;
            u[model] = data;
            var helps = await helper.edit(data);
            console.log("helps::", helps);
            if (helps != undefined) {
                for (let i = 0; i < helps.length; i++) {
                    let db = new _DB(helps[i]);
                    u[helps[i]] = JSON.parse(JSON.stringify(await db.find()));
                };
                console.log("data at serve", u);
                return u;
            }else{
                return u;
            }
        } catch (err) {
            console.log("ERRor:", err);
        }
    }

}