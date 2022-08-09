const express = require('express');
const router = express.Router();
const route = require('../controllers/control');
const upload = require('../controllers/services/multerConfig');

router.get('/', (req, res)=>{
    res.render('settings/index', {layout:"backend"});
});
router.get('/news/list', route.settings);
router.get('/news/create', route.settings);
router.get('/news/:id', route.settings);
router.post('/news', upload.single('imageUrl'), route.settings);
router.post('/news/:id', upload.single('imageUrl'), route.settings);
router.delete('/news/:id', route.settings);
router.delete('/news/trash/:id', route.settings);

router.get('/companies/list', route.settings);
router.get('/companies/create', route.settings);
router.get('/companies/:id', route.settings);
router.post('/companies/:id', upload.single('logo'), route.settings);
router.post('/companies', upload.single('logo'), route.settings);
router.delete('/companies/:id', route.settings);
router.delete('/companies/trash/:id', route.settings);


router.get('/services/list', route.settings);
router.get('/services/create', route.settings);
router.get('/services/:id', route.settings);
router.post('/services/:id', upload.single('imageUrl'), route.settings);
router.post('/services', upload.single('imageUrl'), route.settings);
router.delete('/services/:id', route.settings);
router.delete('/services/trash/:id', route.settings);


router.get('/articles/list', route.settings);
router.get('/articles/create', route.settings);
router.get('/articles/:id', route.settings);
router.post('/articles/:id',upload.none(), route.settings);
router.post('/articles',upload.none(), route.settings);
router.delete('/articles/:id', route.settings);
router.delete('/articles/trash/:id', route.settings);


router.get('/abouts/list', route.settings);
router.get('/abouts/create', route.settings);
router.get('/abouts/:id', route.settings);
router.post('/abouts/:id',upload.none(), route.settings);
router.post('/abouts',upload.none(), route.settings);
router.delete('/abouts/:id', route.settings);
router.delete('/abouts/trash/:id', route.settings);


router.get('/games/list', route.settings);
router.get('/games/create', route.settings);
router.get('/games/:id', route.settings);
router.post('/games/:id',upload.single('imageUrl'), route.settings);
router.post('/games', upload.single('imageUrl'), route.settings);
router.delete('/games/:id', route.settings);
router.delete('/games/trash/:id', route.settings);


router.get('/subscribers/list', route.settings);
router.get('/subscribers/create', route.settings);
router.get('/subscribers/:id', route.settings);
router.post('/subscribers/:id',upload.none(), route.settings);
router.post('/subscribers',upload.none(), route.settings);
router.delete('/subscribers/:id', route.settings);
router.delete('/subscribers/trash/:id', route.settings);


router.get('/slides/list', route.settings);
router.get('/slides/create', route.settings);
router.get('/slides/:id', route.settings);
router.post('/slides/:id',upload.single('imageUrl'), route.settings);
router.post('/slides',upload.single('imageUrl'), route.settings);
router.delete('/slides/:id', route.settings);
router.delete('/slides/trash/:id', route.settings);


router.get('/warriors/list', route.settings);
router.get('/warriors/create', route.settings);
router.get('/warriors/:id', route.settings);
router.post('/warriors/:id',upload.single('imageUrl'), route.settings);
router.post('/warriors',upload.single('imageUrl'), route.settings);
router.delete('/warriors/:id', route.settings);
router.get('/warriors/trasher', route.settings);



module.exports = router;