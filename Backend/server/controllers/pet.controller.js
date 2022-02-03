const Pet = require("../models/pet.models");


module.exports.testResponce = (req,res) => {
    res.json({message:"hey its me!"})
}

module.exports.findAllPets = (req,res) => {
    Pet.find({}).sort([['score', -1]])
        .then(results => res.json({results:results}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}

module.exports.createPet = (req,res) => {
    req.body.score = 0;
    Pet.create(req.body)
        .then(newPet => res.json({results:newPet}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}

module.exports.findOnePet = (req,res) => {
    Pet.findOne({_id:req.params._id})
        .then(results => res.json({results:results}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}

module.exports.deletePet = (req,res) => {
    Pet.deleteOne({_id:req.params._id})
        .then(results => res.json({results:results}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}

module.exports.updateOnePet = (req,res) => {
    Pet.updateOne({_id:req.params._id}, req.body, {runValidators:true})
        .then(results => res.json({results:results}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}

module.exports.upVotePet = (req,res) => {
    Pet.findOneAndUpdate({_id:req.params._id}, {$inc: {score:1}}, {new:true})
        .then(results => res.json({results:results}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}