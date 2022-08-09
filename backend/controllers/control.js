const { _DB } = require("../../database/schemas");
const service = require("./services/service");
const fs = require('fs');
var url = require('url');

const capitalize = s => s.replace(/./, c => c.toUpperCase());

module.exports = {

    settings: async (req, res) => {
        var model = capitalize(req.url.toString().split('/')[1]);
        console.log(model);
        var splitted = req.url.split('/');
        var base = req.baseUrl.split('/');
        console.log(splitted.length);
        var folder = base[1] + "/" + splitted[1];
        var route = req.originalUrl;
        var addr = url.parse(route, true);
        console.log(req.url);

        console.log("Method:: ", req.method, folder, "Model::", model);
        switch (req.method) {
            case "GET":
                console.log(splitted);
                switch (req.url) {
                    case `/${splitted[1]}`:

                        /** assigning last values to the handlebars object*/
                        var f = {};
                        f.layout = 'layout2';
                        res.render(`${folder}/index`, f);
                        break;

                    case `/${splitted[1]}/${req.params.id}`:
                        console.log("ame here::", splitted[1]);
                        /** assigning last values to the handlebars object*/
                        var editserve = await service.edit(model, req.params.id);
                        console.log(editserve);
                        res.render(`${folder}/edit`, editserve);
                        break;

                    case `/${splitted[1]}/create`:
                        /** assigning last values to the handlebars object*/
                        let serve = await service.create(model);
                        console.log("serve::", serve);
                        res.render(`${folder}/create`, serve);
                        break;


                    case `/${splitted[1]}/list`:
                        console.log("am here at list:");
                        var loader = new _DB(model);
                        loader.findWithRelatives().then((data) => {
                            console.log("data::", data, model);
                            data = JSON.parse(JSON.stringify(data));
                            /** assigning last values to the handlebars object*/
                            var f = {};
                            f.layout = false;
                            f[`${splitted[1]}`] = data;
                            console.log("The loader", f);
                            res.render(`${folder}/list`, f);
                        }).catch((err) => {
                            console.log(err);
                            res.json(err);
                        });
                        break;
                    case '/trash/' + req.params.id:
                        // var goods = new GoodExec(name, description);
                        var deleter = new _DB(model);
                        deleter.trash(req.params.id).then((data) => {
                            var res = {
                                status: true,
                                notification: "success!"
                            }
                            res.json(res);
                        }).catch((err) => {
                            console.log(err);
                            res.json(err)
                        });

                        break;

                    default:
                        break;
                };
                break;

            case "POST":
                switch (req.url) {
                    case `/${splitted[1]}`:
                        var data = req.body;
                        console.log("am here:", splitted[1], req.file, data);
                        if (req.file) {
                            data[req.file.fieldname] = "/public/uploads/" + req.file.filename;
                            let creator = await new _DB(model);
                            creator.create(data).then((rows) => {
                                console.log(rows);
                                rows = JSON.parse(JSON.stringify(rows));
                                console.log("my rows::", rows);
                                if (!rows.errors) {
                                    var report = {
                                        status: true,
                                        notification: "Successfully added!"
                                    }
                                    res.json(report);
                                } else {
                                    var report = {
                                        status: false,
                                        notification: `Failed! ${rows.errors[0].message}`,
                                    }
                                    var delfile = req.file.path;
                                    console.log("am here", delfile);
                                    fs.unlinkSync(delfile);
                                    res.json(report);
                                }
                            }).catch((err) => {
                                var report = {
                                    status: false,
                                    notification: "Failed to add!",
                                }
                                var delfile = req.file.path;
                                console.log("am here", delfile);
                                fs.unlinkSync(delfile);
                                console.log(err);
                                res.json(report);
                            });
                        } else {
                            if (req.files) {
                                var creator = new _DB(model);
                                req.files.forEach(file => {
                                    data[file.fieldname] = "/public/uploads/" + file.filename;
                                });
                                creator.create(data).then(async (rows) => {
                                    rows = JSON.parse(JSON.stringify(rows));
                                    console.log("my rows::", rows);
                                    if (!rows.errors) {
                                        var report = {
                                            status: true,
                                            notification: "Successfully added!"
                                        }
                                        res.json(report);
                                    } else {
                                        var report = {
                                            status: false,
                                            notification: `Failed! ${rows.errors[0].message}`,
                                        }
                                        var delfile = req.file.path;
                                        if (fs.existsSync(delfile)) {
                                            console.log("am here", delfile);
                                            await fs.unlinkSync(delfile);
                                        }
                                        res.json(report);
                                    }
                                }).catch((err) => {
                                    var report = {
                                        status: false,
                                        notification: "Failed to add!",
                                    }
                                    console.log(err);
                                    res.json(report);
                                });
                            } else {
                                console.log(data);
                                var creator = new _DB(model);
                                creator.create(data).then((rows) => {
                                    rows = JSON.parse(JSON.stringify(rows));
                                    console.log("my rows::", rows);
                                    if (rows) {
                                        var report = {
                                            status: true,
                                            notification: "Successfully added!"
                                        }
                                        res.json(report);
                                    } else {
                                        var report = {
                                            status: false,
                                            notification: "Failed to add data!"
                                        }
                                        res.json(report);
                                    }
                                }).catch((err) => {
                                    res.json(err);
                                });
                            }
                        }
                        break;
                    case `/${splitted[1]}/${req.params.id}`:
                        var data = req.body;
                        console.log("am here:", splitted[1], req.file, data);
                        if (req.file) {
                            data[req.file.fieldname] = "/public/uploads/" + req.file.filename;
                            var updater = new _DB(model);
                            updater.update(req.params.id, data).then(async (rows) => {
                                console.log("rows::",rows)
                                rows = JSON.parse(JSON.stringify(rows));
                                console.log("my rows::", rows);
                                if (!rows.errors) {
                                    var report = {
                                        status: true,
                                        notification: "Successfully updated!"
                                    }
                                    res.json(report);
                                } else {
                                    var report = {
                                        status: false,
                                        notification: `Failed! ${rows.errors[0].message}`,
                                    }
                                    var delfile = req.file.path;
                                    console.log("am here", delfile);
                                    await fs.unlinkSync(delfile);
                                    res.json(report);
                                }
                            }).catch((err) => {
                                var report = {
                                    status: false,
                                    notification: "Failed to update!",
                                }
                                console.log(err);
                                res.json(report);
                            });
                        } else {
                            if (req.files) {
                                var updater = new _DB(model);
                                req.files.forEach(file => {
                                    data[file.fieldname] = "/public/uploads/" + file.filename;
                                });
                                updater.update(req.params.id, data).then(async (rows) => {
                                    rows = JSON.parse(JSON.stringify(rows));
                                    console.log("my rows::", rows);
                                    if (!rows.errors) {
                                        var report = {
                                            status: true,
                                            notification: "Successfully added!"
                                        }
                                        res.json(report);
                                    } else {
                                        var report = {
                                            status: false,
                                            notification: `Failed! ${rows.errors[0].message}`,
                                        }
                                        var delfile = req.file.path;
                                        if (fs.existsSync(delfile)) {
                                            console.log("am here", delfile);
                                            await fs.unlinkSync(delfile);
                                        }
                                        res.json(report);
                                    }
                                }).catch((err) => {
                                    var report = {
                                        status: false,
                                        notification: "Failed to add!",
                                    }
                                    console.log(err);
                                    res.json(report);
                                });
                            } else {
                                console.log("no file data::",data);
                                var updater = new _DB(model);
                                updater.update(req.params.id, data).then((rows) => {
                                    rows = JSON.parse(JSON.stringify(rows));
                                    console.log("my rows::", rows);
                                    if (rows) {
                                        var report = {
                                            status: true,
                                            notification: "Successfully updated!"
                                        }
                                        res.json(report);
                                    } else {
                                        var report = {
                                            status: false,
                                            notification: "Failed to updated data!"
                                        }
                                        res.json(report);
                                    }
                                }).catch((err) => {
                                    res.json(err);
                                });
                            }
                        }
                        break;
                    default:
                        break;
                }
                break;

            // case "PUT":
            //     console.log("am at PUT", req.originalUrl);
            //     switch (req.url) {
            //         case `/edit/${req.params.id}`:
            //             console.log("am",req.params.id);
            //             var data = req.body;
            //             // var goods = new GoodExec(name, description);
            //             var updater = new _DB(model);
            //             var ans = await updater.update(req.params.id, data);
            //             if(ans){
            //                 var report = {
            //                     status:true,
            //                     notification:"Successfully updated!"
            //                 }
            //                 res.json(report);
            //             }else{
            //                 var report = {
            //                     status:false,
            //                     notification:"Failed to add data!",
            //                     error: err.message
            //                 }
            //                 res.json(report);
            //             }
            //             break;
            //         default:
            //             break;
            //     }
            //     break;

            case "DELETE":
                switch (req.url) {
                    case `/${splitted[1]}/trash/${req.params.id}`:
                        // var goods = new GoodExec(name, description);
                        var trasher = new _DB(model);
                        trasher.trash(req.params.id).then((data) => {
                            res.json(data);
                        }).catch((err) => {
                            console.log(err);
                            res.json()
                        });

                        break;

                    default:
                        break;
                }
                switch (req.url) {
                    case `/${splitted[1]}/${req.params.id}`:
                        // var goods = new GoodExec(name, description);
                        var deleter = new _DB(model);
                        deleter.delete(req.params.id).then((data) => {
                            res.json(data);
                        }).catch((err) => {
                            console.log(err);
                            res.json()
                        });

                        break;

                    default:
                        break;
                }
                break;
                
            default:
                break;
        }
    },
    site: async (req, res) => {
        var model = capitalize(req.baseUrl.toString().split('/')[1]);
        console.log(model);
        var folder = req.baseUrl.toString().split('/')[1];
        var route = req.originalUrl;
        var addr = url.parse(route, true);
        // console.log(addr);

        console.log("Method:: ", req.method, addr);
        switch (req.method) {
            case "GET":
                switch (req.url) {
                    case '/':
                        /** assigning last values to the handlebars object*/
                        var f = {};
                        f.layout = 'layout2';
                        res.render(`backend/${folder}/index`, f);
                        break;

                    case `/?id=${req.query.id}`:
                        /** assigning last values to the handlebars object*/
                        var editserve = await service.edit(model, req.query.id);
                        console.log(serve);
                        res.render(`backend/${folder}/edit`, editserve);

                        break;

                    case '/create':
                        /** assigning last values to the handlebars object*/
                        var serve = await service.create(model);
                        console.log("serve::", serve);
                        res.render(`backend/${folder}/create`, serve);
                        break;


                    case '/list':
                        console.log("am here at list:");
                        var loader = new _DB(model);
                        loader.findWithRelatives().then((data) => {
                            console.log("data::", data, model);
                            data = JSON.parse(JSON.stringify(data));
                            /** assigning last values to the handlebars object*/
                            var f = {};
                            f.layout = false;
                            f[`${folder}`] = data;
                            console.log("The loader", f);
                            res.render(`backend/${folder}/list`, f);
                        }).catch((err) => {
                            console.log(err);
                            res.json(err);
                        });
                        break;
                    case '/trash/' + req.params.id:
                        // var goods = new GoodExec(name, description);
                        var deleter = new _DB(model);
                        deleter.trash(req.params.id).then((data) => {
                            var res = {
                                status: true,
                                notification: "success!"
                            }
                            res.json(res);
                        }).catch((err) => {
                            console.log(err);
                            res.json(err)
                        });

                        break;

                    default:
                        break;
                };
                break;

            case "POST":
                switch (req.url) {
                    case '/':
                        var data = req.body;
                        console.log(data);
                        var creator = new _DB(model);
                        creator.create(data).then((rows) => {
                            rows = JSON.parse(JSON.stringify(rows));
                            console.log("my rows::", rows);
                            if (rows) {
                                var report = {
                                    status: true,
                                    notification: "Successfully added!"
                                }
                                res.json(report);
                            } else {
                                var report = {
                                    status: false,
                                    notification: "Failed to add data!"
                                }
                                res.json(report);
                            }
                        }).catch((err) => {
                            res.json(err);
                        });
                        break;
                    case `/edit/${req.params.id}`:
                        console.log("am", req.params.id);
                        var data = req.body;
                        // var goods = new GoodExec(name, description);
                        var updater = new _DB(model);
                        var ans = await updater.update(req.params.id, data);
                        if (ans) {
                            var report = {
                                status: true,
                                notification: "Successfully updated!"
                            }
                            res.json(report);
                        } else {
                            var report = {
                                status: false,
                                notification: "Failed to add data!",
                                error: err.message
                            }
                            res.json(report);
                        }
                        break;
                    default:
                        break;
                }
                break;

            // case "PUT":
            //     console.log("am at PUT", req.originalUrl);
            //     switch (req.url) {
            //         case `/edit/${req.params.id}`:
            //             console.log("am",req.params.id);
            //             var data = req.body;
            //             // var goods = new GoodExec(name, description);
            //             var updater = new _DB(model);
            //             var ans = await updater.update(req.params.id, data);
            //             if(ans){
            //                 var report = {
            //                     status:true,
            //                     notification:"Successfully updated!"
            //                 }
            //                 res.json(report);
            //             }else{
            //                 var report = {
            //                     status:false,
            //                     notification:"Failed to add data!",
            //                     error: err.message
            //                 }
            //                 res.json(report);
            //             }
            //             break;
            //         default:
            //             break;
            //     }
            //     break;

            case "DELETE":
                switch (req.url) {
                    case '/' + req.params.id:
                        // var goods = new GoodExec(name, description);
                        var deleter = new _DB(model);
                        deleter.trash(req.params.id).then((data) => {
                            res.json(data);
                        }).catch((err) => {
                            console.log(err);
                            res.json()
                        });

                        break;

                    default:
                        break;
                }
                break;
            default:
                break;
        }
    },
    api: async (req, res) => {
        var baseArray = req.baseUrl.split('/');
        console.log(baseArray);
        var model = capitalize(baseArray[2].toString());
        console.log(model);
        var folder = req.baseUrl.toString().split('/')[1];
        console.log("base url::", req.url);
        switch (req.method) {
            case "GET":
                switch (req.url) {
                    case '/':
                        // console.log("am here at list:", req.query);
                        var loader = new _DB(model);
                        await (await loader._model()).Goods.sync();
                        loader.find().then((data) => {
                            data = JSON.parse(JSON.stringify(data));
                            console.log(data);
                            res.json(data);
                        }).catch((err) => {
                            console.log(err);
                            res.json(err);
                        });
                        break;

                    case `/${req.params.id}`:
                        var id = parseInt(req.params.id);
                        var loader = new _DB(model);
                        try {
                            var data = await loader.idFind(id);
                            data = JSON.parse(JSON.stringify(data));
                            res.json(data);
                        } catch (err) {
                            res.json(err);
                        }
                        break;
                    default:
                        break;
                }
                break;
            case "POST":
                switch (req.url) {
                    case '/':
                        var data = req.body;
                        console.log(data);
                        var creator = new _DB(model);
                        creator.create(data).then((data) => {
                            res.json(data);
                        }).catch((err) => {
                            res.json(err);
                        });
                        break;
                    default:
                        break;
                }
                break;

            case "PUT":
                switch (req.url) {
                    case '/:id':
                        var data = req.body;
                        // var goods = new GoodExec(name, description);
                        var updater = new _DB(model);
                        updater.update(req.params.id, data).then((data) => {
                            res.json(data);
                        }).catch((err) => {
                            console.log(err);
                            res.json()
                        });
                        break;
                    default:
                        break;
                }
                break;

            case "DELETE":
                switch (req.url) {
                    case '/:id':
                        var data = req.body;
                        // var goods = new GoodExec(name, description);
                        var updater = new _DB(model);
                        updater.update(req.params.id, data).then((data) => {
                            res.json(data);
                        }).catch((err) => {
                            console.log(err);
                            res.json()
                        });

                        break;

                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
} 
