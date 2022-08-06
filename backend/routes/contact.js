const express = require('express');
const router = express.Router();
const {_DB} = require('../../database/schemas');
router.get('/', async(req, res)=>{
    const abouts = new _DB('Abouts');
    const aboutslist = JSON.parse(JSON.stringify(await abouts.findWithRelatives()));
    const groups = new _DB('Groups');
    const groupslist = JSON.parse(JSON.stringify(await groups.findWithRelatives()));
    console.log("service::", groupslist);
    res.render('contact', {layout:"sub", groups:groupslist, abouts:aboutslist});
});

module.exports = router;