/**
 * Created by wassi on 19.01.14.
 */


    var hardwareAccess = require('./hardwareAccess');
var Hardware = require('mongoose').model('Hardware');
var hardware = {};

var map=function(v,fromLow,fromHigh, toLow, toHigh){

};

exports.setColor = function (r,g,b) {
    //console.log('test',model);
    hardwareAccess.setActuator(r, 22, 'pwm', function (v) {
        return map(v, 0, 255, 0, 1);
    });
    hardwareAccess.setActuator(g, 23, 'pwm', function (v) {
        return map(v, 0, 255, 0, 1);
    });
    hardwareAccess.setActuator(b, 24, 'pwm', function (v) {
        return map(v, 0, 255, 0, 1);
    });
};

//TODO: überhitzungsschutz