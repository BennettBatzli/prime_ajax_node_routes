var nameArray = [];

var express = require('express');
var name = express.Router();
var path = require('path');

name.get('/', function(req,res){
    res.send({message: 'hello'});
});

name.post('/', function(req,res){
    console.log(req.body);
    nameArray.push(req.body.name);
    console.log(nameArray);
    res.send(req.body.name);
});

exports.name = name;
exports.nameArray = nameArray;