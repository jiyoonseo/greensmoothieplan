/**
 * Created by junes on 2/7/2016.
 */

/*
 1. Passport uses 'serializeUser' and 'deserializeUser' to map requests to the authenticated user,
    allowing you to use whatever storage method you want.
 2. Once these two methods are implemented, as long as there is an active session, and the user has successfully authenticated,
    [req.session.passport.user] will be the corresponding User model instance.
 */
var User = require('../models/user.js'),
    passport = require('passport'),
    FacebookStratege = require('passport-facebook').Strategy;

passport.serializeUser(function(user, done){
    done.(null, user._id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err || !user) return done(err, null);
        done(null, user);
    });
});


// To Enable Passport's Functionalities:
//    1. Initialize Passport
//    2. Register Routes ( Handle Authentication ; Redirect callbacks from 3rd-party authentication services)
// We want to CHOOSE when Passport is linked into middleware chain (the ORDER is important when add middleware)

module.exports = function(app, options){

    // if success and failure redirects aren't specified,
    // set some reasonable defaults
    if(!options.successRedirect)
        options.successRedirect = '/account';
    if(!options.failureRedirect)
        options.failureRedirect = '/login';

    return { // return functions; easy way to pass in Express application Object.

        init: function() { /* TODO */ },

        registerRoutes: function() { /* TODO */ },

    };
};