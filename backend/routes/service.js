const express = require('express');
const router = express.Router();
const {_DB} = require('../../database/schemas');
router.get('/', async (req, res)=>{
    const services = new _DB('Services');
    const servicelist = JSON.parse(JSON.stringify(await services.findWithRelatives()));
    const groups = new _DB('Groups');
    const grouplist = JSON.parse(JSON.stringify(await groups.findWithRelatives()));
    res.render('puma_services', {layout:"sub", services:servicelist, groups:grouplist});
});
router.get('/:id', async (req, res)=>{
    const id = req.params.id;
    const services = new _DB('Services');
    const servicelist = JSON.parse(JSON.stringify(await services.idFindWithRelative(id)));
    const serviceslist = JSON.parse(JSON.stringify(await services.findWithRelatives()));
    console.log("service::", servicelist);
    res.render('puma_service', {layout:"sub", service:servicelist, services:serviceslist});
});

module.exports = router;