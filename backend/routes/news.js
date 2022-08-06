const express = require('express');
const router = express.Router();
const {_DB} = require('../../database/schemas');
router.get('/', async (req, res)=>{
    const news = new _DB('News');
    const newslist = JSON.parse(JSON.stringify(await news.findWithRelatives()));
    const groups = new _DB('Groups');
    const grouplist = JSON.parse(JSON.stringify(await groups.findWithRelatives()));
    res.render('puma_news', {layout:"sub", news:newslist, groups:grouplist});
});
router.get('/:id', async (req, res)=>{
    const id = req.params.id;
    const news = new _DB('News');
    const newlist = JSON.parse(JSON.stringify(await news.idFindWithRelative(id)));
    const newslist = JSON.parse(JSON.stringify(await news.findWithRelatives()));
    console.log("new::", newlist);
    res.render('puma_new', {layout:"sub", newz:newlist, news:newslist});
});

module.exports = router;