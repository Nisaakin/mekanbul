var express = require('express');
var router = express.Router();
module.rxports.index = function (req, res){
    res.render('index', { 'title': 'Express'});
}
