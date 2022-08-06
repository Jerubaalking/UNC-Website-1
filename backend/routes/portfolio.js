const express = require('express');
const router = express.Router();
const {_DB} = require('../../database/schemas');
router.get('/',async (req, res)=>{
    const portfolios = new _DB('Portfolios');
    const portfolioslist = JSON.parse(JSON.stringify(await portfolios.findWithRelatives()));
    const groups = new _DB('Groups');
    const groupslist = JSON.parse(JSON.stringify(await groups.findWithRelatives()));
    console.log("service::", groupslist);
    res.render('portfolios', {layout:"sub", groups:groupslist, portfolios:portfolioslist});
});
router.get('/:id', async (req, res)=>{
    const id = req.params.id;
    const portfolios = new _DB('Portfolios');
    const portfoliolist = JSON.parse(JSON.stringify(await portfolios.idFindWithRelative(id)));
    const groups = new _DB('Groups');
    const groupslist = JSON.parse(JSON.stringify(await groups.findWithRelatives()));
    console.log("service::", groupslist);
    res.render('portfolio', {layout:"sub", groups:groupslist, portfolios:portfoliolist});
});
module.exports = router;