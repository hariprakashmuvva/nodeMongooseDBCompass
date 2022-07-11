const express = require('express')
const router = express.Router()

var userDetailsModel = require('../models/userDetailsModel')

router.get('/', async (req,res)=>{
    
    var data = await userDetailsModel.find()
    res.json(data)
})


router.get('/:id', async(req,res)=>{
    var id = req.params.id
    var data = await userDetailsModel.findById(id)
    res.json(data)
})

router.put('/:id', async (req,res) =>{
      var id= req.params.id
      var data ={
        name:req.body.name,
        place:req.body.place,
        email:req.body.email
      }
     await userDetailsModel.findByIdAndUpdate(id,data,(err, docs)=>{
        if(!err){
            res.json('Updated successfully');
        }else{
            res.json('Failed to update')
        }
      })
})

router.delete('/:id',(req,res)=>{
    var id = req.params.id
    userDetailsModel.findByIdAndDelete(id, (err, docs)=>{
        res.json(docs);
    })
})

router.post('/',(req,res)=>{
    var UserData = {
        name : req.body.name,
        place : req.body.place,
        email : req.body.email
    }

    const data = new userDetailsModel(UserData)
    data.save().then(response => {
        res.json(response)
    }).catch(err => {
        if(err){
            console.log('Error',err)
        }
    })
})

module.exports = router