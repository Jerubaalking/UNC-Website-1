const express = require('express');
const router = express.Router();
const news = require('../controllers/news_controller');
const athletes = require('../controllers/athlete_controller');
const articles = require('../controllers/article_controller');
const fitness = require('../controllers/fitness_controller');
const AboutControllers = require('../controllers/about_controller');
const events = require('../controllers/event-controller');
const AthletesModel = require('../../engine/models/athlete');
const FitnessModel = require('../../engine/models/fitness');
const ArticlesModel = require('../../engine/models/article');
const AboutModels = require('../../engine/models/about');
const NewsModel = require('../../engine/models/news');
const formidable = require('formidable');
const path = require('path');
const BaseUrl = require('../../base');
const fs = require('fs');
const upload = require('../../engine/multerConfig');
const notification = require('./notification');
const { Fight } = require('../../engine/models/event');
router.get('/', (req, res) => {
    res.render("settings/index", { layout: "backend" });
});
router.get('/news/list', (req, res) => {
    var newsData = [];
    news.findAll().then((newss) => {
        newss.forEach(newz => {
            var n = new NewsModel();
            newsData.push(newz.get(n));
            console.log(newz.get(n));
        });
        res.render("settings/news/list", { layout: false, news: newsData });
    }).catch((err) => {
        console.log(err);
    });

});
router.get('/news/create', (req, res) => {
    res.render('settings/news/create', { layout: false });
});
router.post('/news/add', upload.single('imageUrl'), (req, res, next) => {

    var n = new NewsModel();
    n = req.body;
    // console.log(n);
    try {
        if (req.file) {
            const pathName = '/public/uploads/' + req.file.filename;
            // var incomingData = req.body;
            n.imageUrl = pathName;
            news.create(n).then((ans) => {
                if (ans) {
                    var result = {
                        status: true,
                        notification: "Successfully added news"
                    }
                    res.json(result);
                } else {
                    console.log(ans);
                }
            }).catch((err) => {

                var result = {
                    status: false,
                    notification: "Failed to add news: " + err
                }
                res.json(result);
            });
        } else {
            var result = {
                status: false,
                notification: "Failed to add news"
            }
            res.json(result);
        }
    } catch (err) {
        console.log(err);
    }


});
router.get('/news/edit/:id', (req, res) => {
    // var id = new Number();
    var id = req.params.id;
    news.findWithId(id).then((newss) => {
        var newsarray = [];
        var n = new NewsModel();
        console.log("Data from db:: ", newss);
        newsarray.push(newss.get(n));
        res.render('settings/news/edit', { layout: false, newsz: newsarray });
    }).catch((err) => {
        console.log("Error at Router: ", err);
    });
});
router.post('/news/update', upload.single('imageUrl'), (req, res, next) => {

    var News = new NewsModel();
    News = req.body;

    news.findWithId(req.body.id).then((fresult) => {
        console.log("News ID: ", req.body);
        // var d = fresult.get(new NewsModel());
        if (req.file) {
            const pathName = '/public/uploads/' + req.file.filename;
            News.imageUrl = pathName;
            news.update(News).then((ans) => {
                var result = {
                    status: true,
                    notification: "Successfully updated news"
                }
                res.json(result);
            });
        } else {
            if (fresult) {
                // console.log("Find by ID: ", fresult);
                news.update(News).then((ans) => {
                    var result = {
                        status: true,
                        notification: "Successfully updated  news"
                    }
                    res.json(result);
                });
            } else {
                var result = {
                    status: false,
                    notification: "failed to updated  news"
                }
                res.json(result);
            }
        }

    });
    // var id = req.body.params;
    // news.findAll()
    // res.render('settings/news/edit');
});
router.post('/news/remove/:id', (req, res) => {
    var id = req.params.id;
    news.findWithId(id).then((fresult) => {
        var fs = require('fs');
        var ddd = new NewsModel();
        var d = fresult.get(ddd);

        news.remove(id).then((result) => {
            console.log("result: ", result);
            if (result == id.length) {
                // now we delete the image in upload folder
                var imglink = BaseUrl.toString() + d.imageUrl;
                console.log(imglink);
                fs.unlink(imglink, (err) => {
                    if (err) {
                        var summary = {
                            status: true,
                            notification: "Successfully removed news but image failed"
                        };
                        res.json(summary);
                    } else {

                        var summary = {
                            status: true,
                            notification: "Successfully removed news"
                        };
                        res.json(summary);
                    }
                });
            } else {
                var summary = {
                    status: false,
                    notification: "Failed to removed news"
                };
                res.json(summary);
            }
        });
    });

});


//////////// Athletes settings /////////////
router.get('/athletes/list', (req, res) => {
    var athletesData = [];
    athletes.findAll().then((athletess) => {
        athletess.forEach(newz => {
            var athlete = new AthletesModel();
            athletesData.push(newz.get(athlete));
            console.log(newz.get(athlete));
        });
        res.render("settings/athletes/list", { layout: false, athletes: athletesData });
    }).catch((err) => {
        console.log(err);
    });

});
router.get('/athletes/create', (req, res) => {
    res.render('settings/athletes/create', { layout: false });
});
router.post('/athletes/add', upload.fields([{ name: "headImage", maxCount: 1 }, { name: "bodyImage", maxCount: 1 }]), (req, res, next) => {

    var headPathName;
    var bodyPathName;
    if (req.files) {

        try {
            headPathName = '/public/uploads/' + req.files["headImage"][0].filename;
            bodyPathName = '/public/uploads/' + req.files["bodyImage"][0].filename;


            var athlete = new AthletesModel();
            athlete = req.body;
            athlete.bodyImage = bodyPathName;
            athlete.headImage = headPathName;
            athlete.socials = JSON.stringify(athlete.socials);
            console.log("Body:: ", athlete);

            athletes.create(athlete).then((ans) => {
                console.log(ans);
                if (ans) {

                    var summary = new notification(true, "Successfully added athlete", null);
                    res.json(summary);
                }

            }).catch((err) => {
                var error = new Error();
                error.name = "Error during adding Athlete";
                error.message = err;
                console.log(err);
                var summary = new notification(false, "failed to add athlete1", error);
                res.json(summary);


            });
        } catch (err) {
            var athlete = new AthletesModel();
            athlete = req.body;
            athletes.create(athlete).then((ans) => {
                console.log(ans);
                if (ans) {

                    var summary = new notification(true, "Successfully added athlete2", null);
                    res.json(summary);
                }

            }).catch((err) => {
                var error = new Error();
                error.name = "Error during adding Athlete";
                error.message = err;

                var summary = new notification(false, "failed to add athlete ", error);
                res.json(summary);


            });
        }
    } else {

        var summary = new notification(false, "failed to add  athlete", null);
        res.json(summary);
    }

});
router.get('/athletes/edit/:id', (req, res) => {
    // var id = new Number();
    var id = req.params.id;
    athletes.findWithId(id).then((athletess) => {
        var athletesarray = [];
        var n = new AthletesModel();
        console.log("Data from db:: ", athletess);
        athletesarray.push(athletess.get(n));
        res.render('settings/athletes/edit', { layout: false, athletesz: athletesarray });
    }).catch((err) => {
        console.log("Error at Router: ", err);
    });
});
router.post('/athletes/update', upload.fields([{ name: "headImage", maxCount: 1 }, { name: "bodyImage", maxCount: 1 }]), (req, res, next) => {



    athletes.findWithId(req.body.id).then((fresult) => {
        var structure = new AthletesModel();
        athlete = fresult.get(structure);
        athlete = req.body;
        if (req.files) {
            if (req.files["headImage"] != null || undefined) {
                var headPathName = '/public/uploads/' + req.files["headImage"][0].filename;
                athlete.headImage = headPathName;
            }
            if (req.files["bodyImage"] != null || undefined) {
                var bodyPathName = '/public/uploads/' + req.files["bodyImage"][0].filename;
                athlete.bodyImage = bodyPathName;
            }
            athletes.update(athlete).then((ans) => {
                var result = {
                    status: true,
                    notification: "Successfully updated  athletes"
                }
                res.json(result);
            });
        } else {
            if (fresult) {
                console.log("Find by ID: ", fresult);
                athletes.update(athlete).then((ans) => {
                    var result = {
                        status: true,
                        notification: "Successfully updated  athletes"
                    }
                    res.json(result);
                });
            } else {
                var result = {
                    status: false,
                    notification: "failed to updated  athletes"
                }
                res.json(result);
            }
        }

    });
    // var id = req.body.params;
    // athletes.findAll()
    // res.render('settings/athletes/edit');
});
router.post('/athletes/remove/:id', (req, res) => {
    var id = req.params.id;
    if (id) {
        athletes.findWithId(id).then((fresult) => {
            if (fresult) {
                var fs = require('fs');
                var dd = new AthletesModel();
                // console.log(fresult.get(dd));
                var d = fresult.get(dd);

                athletes.remove(id).then((result) => {
                    console.log("result: ", result);
                    // now we delete the image in upload folder
                    try {
                        fs.unlink(BaseUrl.toString() + d.bodyImage, (err) => {
                            if (err) {
                                console.log(err);
                                var summary = new notification(false, "Failed to remove Athlete", err);
                                res.json(summary);
                            }
                        });
                        fs.unlink(BaseUrl.toString() + d.headImage, (err) => {
                            if (err) {
                                console.log(err);
                                var summary = {
                                    status: false,
                                    notification: "Failed to removed athlete"
                                };
                                res.json(summary);
                            }
                        });

                        var summary = new notification(true, "Successfully removed athlete", null);
                        res.json(summary);
                    } catch (err) {
                        var summary = new notification(true, "Successfully removed athlete", err);
                        res.json(summary);
                    };

                }).catch((err) => {
                    var summary = new notification(false, "Failed to removed athlete", err);
                    res.json(summary);
                });
            } else {
                var err = new Error();
                err.message = "Specified :id does not exist";
                var summary = new notification(false, "Failed athlete dont exist", err);
                res.json(summary);

            }

        });
    } else {
        var err = new Error();
        err.message = "parameter :id not is null or undefined";
        var summary = new notification(false, "Failed to removed athlete", err);
        res.json(summary);

    }

});


//////////// Events settings /////////////
router.get('/events/list', (req, res) => {
    console.log("am here at list");
    var eventsData = [];
    // var data = async function(){
    events.findAll().then((eventss) => {
        // for each event select fighters
        eventss.forEach(event => {
            var fight = new Fight();
            fight = event.get(fight);
            athletes.findAll().then((ath1) => {
                // for each athlete select those whose id are in the event
                ath1.forEach(athlt => {
                    var a1 = new AthletesModel();
                    var at = athlt.get(a1);
                    if (at.id == fight.athlete1) {
                        fight.athlete1 = at;
                    }
                    if (at.id == fight.athlete2) {
                        fight.athlete2 = at;
                    }
                });
                eventsData.push(fight);
            });
        });
        res.render("settings/events/list", { layout: false, events: eventsData });
    });
    // }

    // res.render('settings/events/list', {layout:false, events:eventsData})
});
router.get('/events/create', (req, res) => {
    var athletesData = [];
    athletes.findAll().then((athletess) => {
        athletess.forEach(newz => {
            var athlete = new AthletesModel();
            athletesData.push(newz.get(athlete));
            console.log(newz.get(athlete));
        });

        res.render('settings/events/create', { layout: false, athletes: athletesData });
    }).catch((err) => {
        console.log(err);
    });
});
router.post('/events/add', upload.single("hero"), (req, res, next) => {


    if (req.file) {
        const pathName = '/public/uploads/' + req.file.filename;
        // var incomingData = req.body;
        var fight = new Fight();
        fight.hero = pathName;
        fight = req.body;
        console.log("Body:: ", fight);

        events.create(fight).then((ans) => {
            console.log(ans);
            if (ans) {

                var summary = new notification(true, "Successfully added event", null);
                res.json(summary);
            }

        }).catch((err) => {
            var error = new Error();
            error.name = "Error during adding Event";
            error.message = err;

            var summary = new notification(false, "failed to add Event", error);
            res.json(summary);


        });
    } else {
        const pathName = '/public/uploads/logo.jpg';
        // var incomingData = req.body;
        var fight = new Fight();
        fight.hero = pathName;
        fight = req.body;
        console.log("Body:: ", fight);

        events.create(fight).then((ans) => {
            console.log(ans);
            if (ans) {

                var summary = new notification(true, "Successfully added event", null);
                res.json(summary);
            }

        }).catch((err) => {
            var error = new Error();
            error.name = "Error during adding Event";
            error.message = err;

            var summary = new notification(false, "failed to add Event", error);
            res.json(summary);


        });
    }

});
router.get('/events/edit/:id', (req, res) => {
    // var id = new Number();
    var id = req.params.id;
    events.findWithId(id).then((eventss) => {
        var athleteData = [];
        athletes.findAll().then((athletess) => {
            athletess.forEach(athlete => {
                var at = new AthletesModel();
                var data = athlete.get(at);
                athleteData.push(data);

            });
            var eventsarray = [];
            var n = new Fight();
            console.log("Data from db:: ", eventss);
            eventsarray.push(eventss.get(n));
            console.log(athleteData);
            res.render('settings/events/edit', { layout: false, events: eventsarray, athletes: athleteData });
        });
    }).catch((err) => {
        console.log("Error at Router: ", err);
    });
});
router.post('/events/update', upload.single('hero'), (req, res, next) => {


    if (req.file) {
        const pathName = '/public/uploads/' + req.file.filename;
        var fight = new Fight();
        fight = req.body;
        fight.hero = pathName;
        console.log("Body:: ", fight);

        events.update(fight).then((ans) => {
            console.log(ans);
            if (ans) {

                var summary = new notification(true, "Successfully updated event", null);
                res.json(summary);
            }

        }).catch((err) => {
            var error = new Error();
            error.name = "Error during updating Event";
            error.message = err;
            console.log(err);
            var summary = new notification(false, "failed to update Event", error);
            res.json(summary);
        });
    } else {
        const pathName = '/public/uploads/logo.jpg';
        var fight = new Fight();
        fight = req.body;
        fight.hero = pathName;
        console.log("Body:: ", fight);

        events.update(fight).then((ans) => {
            console.log(ans);
            if (ans) {

                var summary = new notification(true, "Successfully updated event", null);
                res.json(summary);
            }

        }).catch((err) => {
            var error = new Error();
            error.name = "Error during updating Event";
            error.message = err;

            var summary = new notification(false, "failed to update Event", error);
            res.json(summary);
        });
    }
});
router.post('/events/remove/:id', (req, res) => {
    var id = req.params.id;
    if (id) {
        events.findWithId(id).then((fresult) => {
            if (fresult) {
                var fs = require('fs');
                var dd = new Fight();
                // console.log(fresult.get(dd));
                var d = fresult.get(dd);

                events.remove(id).then((result) => {
                    console.log("result: ", result);

                    var summary = new notification(true, "Successfully removed Event!", null);
                    res.json(summary);

                }).catch((err) => {
                    var summary = new notification(false, "Failed to removed Event!", err);
                    res.json(summary);
                });
            } else {
                var err = new Error();
                err.message = "Specified :id does not exist";
                var summary = new notification(false, "Failed Event dont exist", err);
                res.json(summary);

            }

        });
    } else {
        var err = new Error();
        err.message = "parameter :id is null or undefined";
        var summary = new notification(false, "Failed to removed Event", err);
        res.json(summary);

    }

});


//////////// Articles settings /////////////
router.get('/articles/list/:id', (req, res) => {
    var id = req.params.id;
    console.log("am here at list");
    // var data = async function(){
    news.findWithId(id).then((newss) => {
        // for each event select fighters
        var allArticles = [];
        var newz = new NewsModel();
        newz = newss.get(newz);
        articles.findAll(newz.id).then((atics) => {
            // for each athlete select those whose id are in the event
            atics.forEach(artic => {
                var article = new ArticlesModel();
                article = artic.get(article);
                allArticles.push(article);
            });
        });
        res.render("settings/news/articles", { layout: false, articles: allArticles });
    });
    // }

    // res.render('settings/events/list', {layout:false, events:eventsData})
});
router.get('/articles/create/:id', (req, res) => {
    news.findWithId(req.params.id).then((newss) => {
        var newsz = new NewsModel();
        newsz = newss.get(newsz);
        res.render('settings/news/create_article', { layout: false, news: newsz });
    }).catch((err) => {
        console.log(err);
    });
});

router.post('/articles/add', upload.none(), (req, res, next) => {

    var article = new ArticlesModel();
    article = req.body;
    console.log("Body:: ", article);

    articles.create(article).then((ans) => {
        console.log(ans);
        if (ans) {

            var summary = new notification(true, "Successfully added article", null);
            res.json(summary);
        }

    }).catch((err) => {
        var error = new Error();
        error.name = "Error during adding article";
        error.message = err;

        var summary = new notification(false, "failed to add article", error);
        res.json(summary);


    });

});
router.get('/articles/edit/:id', (req, res) => {
    // var id = new Number();
    var id = req.params.id;
    articles.findWithId(id).then((articless) => {
        var article = new ArticlesModel();
        article = articless.get(article);
        res.render('settings/news/edit_article', { layout: false, article: article });
    }).catch((err) => {
        console.log("Error at Router: ", err);
    });
});
router.post('/articles/update', upload.none(), (req, res, next) => {
    var article = new ArticlesModel();
    article = req.body;
    console.log("Body:: ", article);

    articles.update(article).then((ans) => {
        console.log(ans);
        if (ans) {

            var summary = new notification(true, "Successfully updated article", null);
            res.json(summary);
        }

    }).catch((err) => {
        var error = new Error();
        error.name = "Error during updating article";
        error.message = err;
        console.log(err);

        var summary = new notification(false, "failed to update article", error);
        res.json(summary);
    });
});
router.post('/articles/remove/:id', (req, res) => {
    var id = req.params.id;
    articles.remove(id).then((result) => {
        console.log("result: ", result);

        var summary = new notification(true, "Successfully removed Event!", null);
        res.json(summary);

    }).catch((err) => {
        var summary = new notification(false, "Failed to removed Event!", err);
        res.json(summary);
    });

});


/////////////// ABOUT //////////////////
router.get('/about/mma', (req, res, next) => {
    var mmaz = new AboutModels.AboutMMA();
    AboutControllers.findAll(mmaz, "mma").then((mmas) => {
        var aboutData = [];
        var t = new AboutModels.AboutMMA();
        if (mmas.length <= 0) {
            t.details = "Details";
            t.imageUrl = '/public/images/logo.jpeg';
            AboutControllers.create(t, "mma").then((result) => {
                if (result) {
                    t.id = 1;
                    aboutData.push(t);
                    res.render('settings/abouts/mma', { layout: false, mma: aboutData });
                }
            });
        } else {
            mmas.forEach(mma => {
                t = mma.get(t);
                aboutData.push(t);
            });

            res.render('settings/abouts/mma', { layout: false, mma: aboutData });
        }
    });
});

router.post('/about/update/mma', upload.single("imageUrl"), (req, res, next) => {
    if (req.file) {
        const pathName = '/public/uploads/' + req.file.filename;
        // var incomingData = req.body;
        var mma = new AboutModels.AboutMMA();
        mma = req.body;
        mma.imageUrl = pathName;
        console.log(mma);
        AboutControllers.update(mma, "mma").then((result) => {
            if (result.length >= 1) {

                var summary = new notification(true, "About MMA updated!", null);
                res.json(summary);
            }

        }).catch((err) => {
            var summary = new notification(false, "Failed to update about  MMA!", err);
            res.json(summary);
        });
    } else {
        const pathName = '/public/images/logo.jpeg';
        AboutControllers.findWithId(req.body.id, "mma").then((ans) => {

            var mma = new AboutModels.AboutMMA();
            mma = req.body;
            mma.imageUrl = pathName;
            console.log(mma);
            AboutControllers.update(mma, "mma").then((result) => {
                if (result.length >= 1) {

                    var summary = new notification(true, "About MMA updated!", null);
                    res.json(summary);
                }
            }).catch((err) => {
                var summary = new notification(false, "Failed to update about  MMA!", err);
                res.json(summary);
            });
        });
    }
    // res.render('')
});

router.get('/about/team', (req, res) => {
    var teamz = new AboutModels.AboutTeam();
    AboutControllers.findAll(teamz, "team").then((teams) => {
        var aboutData = [];
        var t = new AboutModels.AboutMMA();
        if (teams.length <= 0) {
            t.details = "Details";
            t.imageUrl = '/public/images/logo.jpeg';
            AboutControllers.create(t, "team").then((result) => {
                if (result) {
                    t.id = 1;
                    aboutData.push(t);
                    res.render('settings/abouts/team', { layout: false, team: aboutData });
                }
            });
            // res.render('settings/abouts/team', {layout:false, teams:[]});
        } else {
            teams.forEach(team => {
                t = team.get(t);
                aboutData.push(t);
            });

            res.render('settings/abouts/team', { layout: false, team: aboutData });
        }
    });
});

router.post('/about/update/team', upload.single("imageUrl"), (req, res, next) => {
    if (req.file) {
        const pathName = '/public/uploads/' + req.file.filename;
        var team = new AboutModels.AboutMMA();
        team = req.body;
        team.imageUrl = pathName;
        console.log(team);
        AboutControllers.update(team, "team").then((result) => {
            if (result.length >= 1) {

                var summary = new notification(true, "About Team updated!", null);
                res.json(summary);
            }

        }).catch((err) => {
            var summary = new notification(false, "Failed to update about Team!", err);
            res.json(summary);
        });
    } else {
        const pathName = '/public/images/logo.jpeg';
        var team = new AboutModels.AboutMMA();
        team = req.body;
        team.imageUrl = pathName;
        console.log(team);
        AboutControllers.update(team, "team").then((result) => {
            if (result.length >= 1) {

                var summary = new notification(true, "About Team updated!", null);
                res.json(summary);
            } else {

                var summary = new notification(false, "About Team updated failed!", null);
                res.json(summary);
            }

        }).catch((err) => {
            var summary = new notification(false, "Failed to update about Team!", err);
            res.json(summary);
        });
    }
    // res.render('')
});

router.get('/about/sport', (req, res, next) => {
    var sportz = new AboutModels.AboutSport();
    AboutControllers.findAll(sportz, "sport").then((sports) => {
        var aboutData = [];
        var t = new AboutModels.AboutMMA();
        if (sports.length <= 0) {
            t.details = "Details";
            t.imageUrl = '/public/images/logo.jpeg';
            AboutControllers.create(t, "sport").then((result) => {
                if (result) {
                    t.id = 1;
                    aboutData.push(t);
                    res.render('settings/abouts/sport', { layout: false, sport: aboutData });
                }
            });
            // res.render('settings/abouts/sport', {layout:false, sport:[]});
        } else {
            sports.forEach(sport => {
                t = sport.get(t);
                aboutData.push(t);
            });

            res.render('settings/abouts/sport', { layout: false, sport: aboutData });
        }
    });
});


router.post('/about/update/sport', upload.single("imageUrl"), (req, res, next) => {
    if (req.file) {
        const pathName = '/public/uploads/' + req.file.filename;
        var sport = new AboutModels.AboutMMA();
        sport = req.body;
        sport.imageUrl = pathName
        // console.log(sport);
        AboutControllers.update(sport, "sport").then((result) => {
            if (result.length >= 1) {

                var summary = new notification(true, "About Sport updated!", null);
                res.json(summary);
            }

        }).catch((err) => {
            var summary = new notification(false, "Failed to update about Sport!", err);
            res.json(summary);
        });
    } else {

    }
    // res.render('')
});


router.get('/about/olympics', (req, res, next) => {
    var olympicz = new AboutModels.AboutOlympics();
    AboutControllers.findAll(olympicz, "olympics").then((olympics) => {
        var aboutData = [];
        var t = new AboutModels.AboutMMA();
        if (olympics.length <= 0) {
            t.details = "Details";
            t.imageUrl = '/public/images/logo.jpeg';
            AboutControllers.create(t, "olympics").then((result) => {
                if (result) {
                    t.id = 1;
                    aboutData.push(t);
                    res.render('settings/abouts/team', { layout: false, olympic: aboutData });
                }
            });
            // res.render('settings/abouts/olympics', {layout:false, olympics:[]});
        } else {
            olympics.forEach(olympic => {
                t = olympic.get(t);
                aboutData.push(t);
            });

            res.render('settings/abouts/olympics', { layout: false, olympic: aboutData });
        }
    });
});

router.post('/about/update/olympics', upload.single("imageUrl"), (req, res, next) => {
    if (req.file) {
        const pathName = '/public/uploads/' + req.file.filename;
        var olympic = new AboutModels.AboutOlympics();
        olympic = req.body;
        olympic.imageUrl = pathName;
        console.log(olympic);
        AboutControllers.update(olympic, "olympics").then((result) => {
            if (result.length >= 1) {

                var summary = new notification(true, "About Olympic updated!", null);
                res.json(summary);
            }

        }).catch((err) => {
            var summary = new notification(false, "Failed to update about Olympic!", err);
            res.json(summary);
        });
    } else {
        AboutControllers.findWithId(req.body.id).then((results) => {
            var l = new AboutModels.AboutOlympics();
            l = results.get(l);
            const pathName = '/public/uploads/' + req.file.filename;
            var olympic = new AboutModels.AboutOlympics();
            olympic = req.body;
            olympic.imageUrl = pathName;
            console.log(olympic);
            AboutControllers.update(olympic, "olympics").then((result) => {
                if (result.length >= 1) {

                    var summary = new notification(true, "About Olympic updated!", null);
                    res.json(summary);
                }

            }).catch((err) => {
                var summary = new notification(false, "Failed to update about Olympic!", err);
                res.json(summary);
            });
        }).catch((err) => {

        });
    }
    // res.render('')
});

/////////////// FITNESS //////////////////
router.get('/fitness/list', (req, res) => {
    var fitnessData = [];
    fitness.findAll().then((fitnesss) => {
        fitnesss.forEach(newz => {
            var n = new FitnessModel();
            fitnessData.push(newz.get(n));
            console.log(newz.get(n));
        });
        res.render("settings/fitnesses/list", { layout: false, fitness: fitnessData });
    }).catch((err) => {
        console.log(err);
    });

});
router.get('/fitness/create', (req, res) => {
    res.render('settings/fitnesses/create', { layout: false });
});
router.post('/fitness/add', upload.single('imageUrl'), (req, res, next) => {

    var n = new FitnessModel();
    n = req.body;
    console.log(n);
    try {
        if (req.file) {
            const pathName = '/public/uploads/' + req.file.filename;
            // var incomingData = req.body;
            n.imageUrl = pathName;
            fitness.create(n).then((ans) => {
                if (ans) {
                    var result = {
                        status: true,
                        notification: "Successfully added fitness"
                    }
                    res.json(result);
                } else {
                    console.log(ans);
                }
            }).catch((err) => {

                var result = {
                    status: false,
                    notification: "Failed to add fitness: " + err
                }
                res.json(result);
            });
        } else {
            var result = {
                status: false,
                notification: "Failed to add fitness"
            }
            res.json(result);
        }
    } catch (err) {
        console.log(err);
    }


});
router.get('/fitness/edit/:id', (req, res) => {
    // var id = new Number();
    var id = req.params.id;
    fitness.findWithId(id).then((fitnesss) => {
        var fitnessarray = [];
        var n = new FitnessModel();
        console.log("Data from db:: ", fitnesss);
        fitnessarray.push(fitnesss.get(n));
        res.render('settings/fitnesses/edit', { layout: false, fitness: fitnessarray });
    }).catch((err) => {
        console.log("Error at Router: ", err);
    });
});
router.post('/fitness/update', upload.single('imageUrl'), (req, res, next) => {

    var News = new FitnessModel();
    News = req.body;

    fitness.findWithId(News.id).then((fresult) => {
        console.log("Fitness ID: ", req.body);
        // var d = fresult.get(new FitnessModel());
        if (req.file) {
            const pathName = '/public/uploads/' + req.file.filename;
            News.imageUrl = pathName;
            fitness.update(News).then((ans) => {
                var result = {
                    status: true,
                    notification: "Successfully updated fitness"
                }
                res.json(result);
            });
        } else {
            if (fresult) {
                // console.log("Find by ID: ", fresult);
                fitness.update(News).then((ans) => {
                    var result = {
                        status: true,
                        notification: "Successfully updated  fitness"
                    }
                    res.json(result);
                }).catch((err) => {
                    console.log(err);
                    var result = {
                        status: false,
                        notification: "failed to updated  fitness"
                    }
                    res.json(result);
                });
            } else {
                var result = {
                    status: false,
                    notification: "failed to updated  fitness"
                }
                res.json(result);
            }
        }

    });
    // var id = req.body.params;
    // fitness.findAll()
    // res.render('settings/fitness/edit');
});
router.post('/fitness/remove/:id', (req, res) => {
    var id = req.params.id;
    fitness.findWithId(id).then((fresult) => {
        var fs = require('fs');
        var ddd = new FitnessModel();
        var d = fresult.get(ddd);

        fitness.remove(id).then((result) => {
            console.log("result: ", result);
            if (result == id.length) {
                // now we delete the image in upload folder
                var imglink = BaseUrl.toString() + d.imageUrl;
                console.log(imglink);
                fs.unlink(imglink, (err) => {
                    if (err) {
                        var summary = {
                            status: true,
                            notification: "Successfully removed fitness but image failed"
                        };
                        res.json(summary);
                    } else {

                        var summary = {
                            status: true,
                            notification: "Successfully removed fitness"
                        };
                        res.json(summary);
                    }
                });
            } else {
                var summary = {
                    status: false,
                    notification: "Failed to removed fitness"
                };
                res.json(summary);
            }
        });
    });

});
module.exports = router;