/**
 * Created by junes on 1/8/2016.
 */
var express = require('express');
var router = express.Router();
var greenSmoothiePlan = 'Green Smoothie Plan';

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
    //res.send('respond with a resource'); //test purpose

    res.render('greenSmoothie30Plan', { title: greenSmoothiePlan });
});

router.get('/[0-9]+', function(req, res, next) {
    //console.log("daynumber selected:" +req.params.day );
    res.render('greenSmoothie30Plan', { title: greenSmoothiePlan });
});
 */
/*
router.get('/grocery-list', function(req, res, next) {
    res.render('groceryList', { title: 'Green Smoothie dynamic' });
});

router.get('/grocery-list/:selectedDayNums', function(req, res, next) {

    //console.log("original Type" + typeof(req.params.selectedDayNums));
    res.render('groceryList', { title: (greenSmoothiePlan + req.params.selectedDayNums) });
});
*/
module.exports = router;
