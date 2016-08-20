/**
 * Created by junes on 2/12/2016.
 */

var jwt = require('jwt-simple')
var config = require('./config')

module.exports = function (req, res, next) {
    if (req.headers['x-auth']) {
        req.auth = jwt.decode(req.headers['x-auth'], config.secret);
    }
    next();
};