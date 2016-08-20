/**
 * Created by junes on 12/29/2015.
 */
var express = require('express');
var router = express.Router();
var cors = require('cors');

var greenSmoothiePlan = 'Green Smoothie Plan';

/* GET index page. */
router.get('/', cors(), function(req, res, next) {
    res.render('layout', { title: greenSmoothiePlan });
});

router.get('/:sub', cors(), function(req, res, next){
    //console.log("SUB= " + (req.params.sub));
    var sub = req.params.sub;
    res.render('layout' , { title: greenSmoothiePlan + sub });
});

router.get('/partial/:sub', cors(), function(req, res, next){
    //console.log("SUB= " + (req.params.sub));
    var sub = req.params.sub;
    res.render('partial/' + sub , { title: greenSmoothiePlan + sub });
});



module.exports = router;