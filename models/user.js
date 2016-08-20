/**
 * Created by junes on 2/7/2016.
 */


// sample Facebook Passport
// User Athentication

var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/authdemo');
var user = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true, select: false} //  select: false  (this will not sent to client)

});
module.exports = mongoose.model('User', user);

/*
var db = require('../db')
var user = db.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true, select: false}
})
module.exports = db.model('User', user)

//:: more data of userChema.. -> will use later
var userSchema = mongoose.Schema({
    authId: String,
    name: String,
    email: String,
    role: String,
    created: Date,
});
*/



