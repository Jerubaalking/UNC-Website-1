const express = require('express');
const router = express.Router();
const {_DB} = require('../../database/schemas');
router.get('/',async (req, res)=>{
    const abouts = new _DB('Abouts');
    const aboutlist = JSON.parse(JSON.stringify(await abouts.findWithRelatives()));
    console.log(aboutlist);
    res.render('puma_about', {layout:"sub", abouts:aboutlist});
});

module.exports = router;