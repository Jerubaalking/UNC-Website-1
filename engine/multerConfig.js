var multer = require('multer');
const BaseUrl = require('../base');
var url = BaseUrl;
console.log("Multer:: ", url);
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, url+'/public/uploads/');
    },
    filename:function(req, file, cb){
        cb(null, Date.now()+file.originalname)
    }
});

 const fileFilter = (req, file, cb)=>{
     if(file.mimetype==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
         cb(null, true);
     }
 }

 const upload = multer({
     storage:storage,
     fileFilter:fileFilter
 });
 module.exports = upload;