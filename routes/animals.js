var animalsArray = [];

var express = require('express');
var animals = express.Router();
var path = require('path');

animals.get('/', function(req,res){
    res.send({message: 'hello'});
});

animals.post('/', function(req,res){
    console.log(req.body);
    animalsArray.push(req.body['spirit-animal']);
    console.log(animalsArray);
    res.send(req.body['spirit-animal']);
});

exports.animals = animals;
exports.animalsArray = animalsArray;