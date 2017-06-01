/**
 * Created by eduinfo on 2017-05-19.
 */

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
    function (id, password, callback) {
        //DB접근하여 로그인처리
        if(id == "study"&&password == "1234"){
            callback(null, id);
        } else {
            callback(null, false);
        }
    }
));

exports.isBasicAutheenticated = passport.authenticate('basic', {session: false});