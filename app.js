var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
//var cors = require('express-cors')
var favicon = require('serve-favicon');

// include webpages
//var routes = require('./routes');
var login = require('./routes/users');
var register = require('./routes/register');

var home = require('./routes/home');
//var groceryList = require('./routes/grocery-list');

var mongoose = require('mongoose');
var config = require('./config');
var auth = require('./config/auth');
var app = express();



// set up for passport-facebook strategy
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy ;


// set up for passport-facebook strategy
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy ;
passport.use(new FacebookStrategy({
        clientID: auth.facebookAuth.clientID,  // from facebookDeveloper 'localhost' on Dashboard
        clientSecret: auth.facebookAuth.clientSecret,
        callbackURL: auth.facebookAuth.callbackURL
        //profileFields: ['id', 'displayName', 'emails', 'name']
    }, function(accessToken, refreshToken, profile, cb){

        console.log(simpleStringify(profile));
        console.log(simpleStringify(profile));
        return cb(null, profile);

    })
);

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

app.get('/auth',
    function(req, res){
        res.render('login');
    });


app.use(passport.initialize());
app.use(passport.session());



app.get('/auth/facebook',
    passport.authenticate('facebook', {scope: ['email']} ),
    function(req, res){
        console.log("facebook login result:" + res);
    });

app.get('/auth/facebook/return',
    passport.authenticate('facebook', { successRedirect: '/user-account', failureRedirect: '/failedAuth' })
    ,function(req, res) {
        console.log("req:" + simpleStringify(req));
        console.log("res:" + simpleStringify(res));
    }
);


// use the routes
//app.use('/', routes);
//app.use('/login', login);
//app.use('/register', register);
//app.use('/grocery-list', groceryList);


app.use('/', home); //test


// allow cross origin
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//favicon setting
app.use(favicon(path.join(__dirname, 'favicon.ico')));

// json use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




//set port to :3000
app.set('port', (process.env.PORT || 3000));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// use static views and other node_module css/js files
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));






// database :: ingredient for 30 days plan
mongoose.connect('mongodb://localhost/ingredient_list');

// schema
var Product = mongoose.model('Product', {name: String});
//var p = new Product({name: 'gs - first'});  // test one data 'p'
//p.save();     // test save


// START::database   [[[[[[[ daily : start ]]]]]]]
var eachIngredientSchema = new mongoose.Schema({ // this is used in mongoose.Schoma 'eachDaySchema'
    count: Number,
    unit: String,
    ingredient: String,
    calories: Number
});

var eachDaySchema = new mongoose.Schema({
    day: Number,
    dailyIngredients: [eachIngredientSchema],
    dailyIngredientsCount: Number,
    dailyCalories: Number
});
var eachDay = mongoose.model('dailyIngredients', eachDaySchema);


app.get('/daily', function(req, res){
    eachDay.find(function(err, daily){
        res.send(daily);
    });
});

/*
app.param('dayNum', function (req, res, next, dayNum) {
    console.log('CALLED ONLY ONCE == ' + dayNum);
    next();
})
*/

app.get('/daily/:dayNum', function (req, res) {
    //console.log('res == ' + simpleStringify(res));
    //console.log('req == ' + simpleStringify(req));

    eachDay.find(function(err, daily){

        res.send(
            daily.filter(function(result, index, array) {

                //console.log("dayNum == " + typeof(parseInt(req.params.dayNum)) ); // return TYPE:  String -> parseInt -> number
                return result.day === parseInt(req.params.dayNum) ;
            })
        );


    });

});

// END::database [[[[[[[ daily : end ]]]]]]]

// START  ::[ Authentication Method with JwT (npm jwt-simple)]
    // This is token-based authentication
app.use(require('./auth'));

var User = require('./models/user.js');
app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));


var jwt = require('jwt-simple');
var bCrypt = require('bcrypt');






//// *************************************************** old below:
// add test to server
app.get('/test', function(req, res) {
    res.render('test', {title: "test page :D"});
});


app.get('/product/name', function(req, res){
  Product.find(function(err, products){
    res.send(products);
  });


});

app.post("/add", function(req, res){
    var name = req.body.name; // require body-parser
    var product = new Product({name: name});
    product.save(function(err){
        res.send();
    });
});


// # app.listen(3000);
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// to return json object in print format
var simpleStringify = function simpleStringify(object){
    var simpleObject = {};
    for (var prop in object ){
        if (!object.hasOwnProperty(prop)){
            continue;
        }
        if (typeof(object[prop]) == 'object'){
            continue;
        }
        if (typeof(object[prop]) == 'function'){
            continue;
        }
        simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
};













module.exports = app;
