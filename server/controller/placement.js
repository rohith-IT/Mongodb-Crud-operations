const express= require('express')
const Placement= require('../model/placement')

exports.createPlacement=async (req,res) => {
    try {
        const placement = new Placement(req.body)
        await placement.save();
        res.status(201).json({msg:"Succesfully created ", placement})
    }catch(error){
        console.log(error)
        res.status(404).json({msg:"error",error})
    }
};

exports.getPlacement= async(req,res) => {
    try {
        const placement = await Placement.find()
        res.status(200).json({msg:" Fetch Success ", placement})
    }catch(error){
        console.log(error)
        res.status(404).json({msg:"error",error})
    }
};

exports.updatePlacement = async(req,res) => {
    try {
         const placement = await Placement.findByIdAndUpdate({_id: req.params.id}, req.body);
         
         res.status(500).json({msg:" Update Sucessfull", placement})
         console.log(placement);
    }catch(error)
    {
        console.log(error)
    }
};
exports.deletePlacement = async (req, res) => {
    try {
      const placement = await Placement.findByIdAndDelete({ _id: req.params.id });
      console.log(placement);
      res.status(500).json({ msg: "Delete Succesfull", placement });
    } catch (error) {
      console.log("Error", error);
    }
  };