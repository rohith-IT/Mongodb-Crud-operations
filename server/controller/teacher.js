const express = require("express");
const Teacher = require("../model/teacher");

exports.createTeacher = async (req, res) => {
  console.log(req.body);
  try {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).json({ msg: "Succesfully created", teacher });
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "Error", error });
  }
};

exports.getTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.find();
    res.status(200).json({ msg: "Succesfully Fetched All Teacher", teacher });
  } catch (error) {
    console.log("Error", error);
  }
};

exports.getOneTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    res.status(200).json({ msg: "Succesfully Fetched One Teacher", teacher });
  } catch (error) {
    console.log("Error", error);
    res.status(404).json({ Msg: "Error", error });
  }
};

exports.updateTeacher = async (req, res) => {
  console.log(req.body);
  try {
    const teacher = await Teacher.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    console.log(teacher);
    res.status(200).json({ msg: "Update Succesfull", teacher });
  } catch (error) {
    console.log("Error", error);
  }
};

exports.deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete({ _id: req.params.id });
    console.log(teacher);
    res.status(500).json({ msg: "Delete Succesfull", teacher });
  } catch (error) {
    console.log("Error", error);
  }
};
