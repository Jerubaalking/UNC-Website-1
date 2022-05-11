const express = require('express');
const router = express.Router();
const news = require('../controllers/news_controller');
const articles = require('../controllers/article_controller');
const athlete = require('../controllers/athlete_controller');
const News = require('../models/news');
const NewsModel = require('../../engine/models/news');
const ArticlesModel = require('../../engine/models/article');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
router.get('/', (req, res)=>{
    res.redirect('/news/all')
});
router.get('/all', (req, res) => {

    // news.create(newwz);
    var newsdata = [];
    news.findAll().then((ath) => {
        ath.forEach(newss => {
            newsdata.push(newss.dataValues)
            console.log("dataValues: ", newss.dataValues);
        });
        res.render('news', { news: newsdata, newslength: newsdata.length });
    });

});
router.get('/:id', (req, res)=>{
    var id = req.params.id;
    news.findWithId(id).then((newss)=>{
        var n = new NewsModel();
        var dd = newss.get(n);
        console.log("dd: ",dd);
        var articlesData = [];
        articles.findAll(dd.id).then((articless)=>{
            if(articless.length> 0){
                articless.forEach(artic => {
                    var article = new ArticlesModel();
                    article = artic.get(article);
                    articlesData.push(article);
                });
                news.findAll().then((ath)=>{
                    var newsdata = [];
                    var i = 0;  
                    ath.forEach(newss => {
                        if(i<4){
                            var n = new NewsModel();
                            console.log(newss.get(n));
                            newsdata.push(newss.get(n));
                            i=i++;
                        }
                        i=3;
                    });
                    res.render('news_view', {news:dd, articles:articlesData, latestnews:newsdata, newslength:newsdata.length});
                });
            }else{
                news.findAll().then((ath)=>{
                    var newsdata = [];
                    var i = 0;  
                    ath.forEach(newss => {
                        if(i<4){
                            var n = new NewsModel();
                            console.log(newss.get(n));
                            newsdata.push(newss.get(n));
                            i=i++;
                        }
                        i=3;
                    });
                res.render('news_view', {news:dd, articles:[], latestnews:newsdata, newslength:newsdata.length});
                });
            }
        });
    });
});
router.post('/add', (req, res) => {
    const form = new formidable.IncomingForm();
    const uploadFolder = path.join(__dirname, "../../public/images/news");
    form.maxFileSize = 50 * 1024 * 1024; // 5MB
    form.uploadDir = uploadFolder;
    // console.log(form);
    // Parsing
    form.parse(req, async (err, fields, files) => {
        // console.log(fields);
        // console.log(files.imageUrl);
        if (err) {
            console.log("Error parsing the files");
            return res.status(400).json({
                status: "Fail",
                message: "There was an error parsing the files",
                error: err,
            });
        }
        if (!files.imageUrl.length) {
            //Single file

            const file = files.imageUrl;

            // checks if the file is valid
            const isValid = isFileValid(file);

            // creates a valid name by removing spaces
            const fileName = encodeURIComponent(file.name.replace(/\s/g, "-"));

            if (!isValid) {
                // throes error if file isn't valid
                return res.status(400).json({
                    status: "Fail",
                    message: "The file type is not a valid type",
                });
            }
            try {
                // renames the file in the directory
                fs.renameSync(file.path, join(uploadFolder, fileName));
            } catch (error) {
                console.log(error);
            }

            try {
                // stores the fileName in the database
                const newFile = await File.create({
                    name: `news/${fileName}`,
                });
                return res.status(200).json({
                    status: "success",
                    message: "File created successfully!!",
                });
            } catch (error) {
                res.json({
                    error,
                });
            }
        } else {
            // Multiple files
            
        }
        
    });
    const isFileValid = (file) => {
        console.log(file[0].PersistantFile);
        const type = file.type.split("/").pop();
        const validTypes = ["jpg", "jpeg", "png", "pdf"];
        if (validTypes.indexOf(type) === -1) {
          return false;
        }
        return true;
      };
    
    // Check if multiple files or a single file

    // var data = req.body;
    // console.log(data);
    //     var athl = new News();
    //     athl = req.body;
    //    const da = news.create(athl).then((ath)=>{
    //         // athletes.push(ath);
    //         return ath
    //     });
    //     res.render('news', {data:da});

});
module.exports = router;