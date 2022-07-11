var express = require('express')
var app = express();
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var userDetails = require('./routes/userDetailsRoutes')

app.use(bodyParser.json())

app.use('/getData',userDetails)

mongoose.connect('mongodb://localhost:27017',{useNewUrlParser:true, useUnifiedTopology:true},(err)=>{
    if(!err){
        console.log('Mongodb is connected...')
    }
    else if(err){
        console.log(err)
    }
})

app.listen(3000,(err)=>{
    if(!err){
        console.log('App is listening....')
    }
    else{
        console.log(err)
    }
})


/* app.get('/',(req,res)=>{
    res.json('Hello World')
})

app.post('/', async(req,res)=>{
    var data = {name:req.body.name}
    res.json(data)
}) */