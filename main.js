const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require('body-parser')
const path = require("path");
const http = require("http");
const dotenv = require('dotenv');
const proccess = require("./cluster");
const BaseUrl = __dirname;
var formidable = require('formidable');
const app = express();
dotenv.config();
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.set('views', './views');

app.engine('hbs', engine({
    defaultLayout: 'layout',
    layoutsDir: 'views/layouts',
    partialsDir: __dirname + '/views/partials',
    helpers: require('./backend/helpers/handle_bar').helpers,
    registerPartial: "home",
    extname: '.hbs',
    registerPartial:'settings'
}));

var port = process.env.PORT;

var settings = require('./backend/routes/settings.js'); 
// var athletes = require('./backend/routes/athlete-router.js'); 
// var news = require('./backend/routes/news-router.js'); 
// var about = require('./backend/routes/about'); 
// var event = require('./backend/routes/event-router'); 
// var fitness = require('./backend/routes/fintess-router'); 
var index = require('./backend/routes/index.js'); 


app.use('/settings', settings);
// app.use('/athletes', athletes);
// app.use('/trending', news);
// app.use('/about', about);
// app.use('/events', event);
// app.use('/fitness', fitness);
// app.use('/news', news);
app.use('/home', index);
app.use('/', index);


// app.get('/settings', (req, res)=>{
//     res.render("settings/index", {layout:"backend"});
// });
// app.get('/fitness', (req,res)=>{
//     res.render('fitness')
// });
// app.get('/settings/news', (req, res)=>{
//     console.log('req.body');
//     res.render("settings/news/list",{layout:false});
// });


app.use(function(req, res, next) {
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
      res.render('404', {layout:false, url: req.url });
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.json({ error: 'Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
  });
// proccess(app, port);
http.createServer(app).listen(port, () => {
    console.log("listening at port: ", port);
});