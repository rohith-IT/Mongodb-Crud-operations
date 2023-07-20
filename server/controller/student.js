const express = require("express");
const Student = require("../model/student");

exports.createStudent = async (req, res) => {
  console.log({suhas:req.body});
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ msg: "Succesfully created", student });
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "Error", error });
  }
};

exports.getStudent = async (req, res) => {
  try {
    const student = await Student.find();
    student.map(item=>{
      console.log("Student name: ",item.name)
    })
    res.status(200).json({ msg: "Succesfully Fetched All Student", student });
  } catch (error) {
    console.log("Error", error);
  }
};

exports.getOneStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
      console.log("Student name: ",student.name)
      console.log("Age: ",student.age)
      console.log("Phone: ",student.phone)
      console.log("Course: ",student.course)
    res.status(200).json({ msg: "Succesfully Fetched One Student", student });
  } catch (error) {
    console.log("Error", error);
    res.status(404).json({ Msg: "Error", error });
  }
};

exports.getStudentPlacement = async (req, res) => {
    try {
      const student = await Student.find({placementTeacher:req.params.id},).populate('placementTeacher')
      student.map(item=>{
        
        console.log(item.name + " is " + " assigned to " + "placement teacher " + item.placementTeacher.name )
      })
      res.status(200).json({ msg: "Succesfully Fetched Placement Teachers", student });
      
    } catch (error) {
      console.log("Error", error);
      res.status(404).json({ Msg: "Error", error });
    }
  };

  exports.getOneStudentMentor = async (req, res) => {
    try {
      const student = await Student.find({teacher:req.params.id}).populate('teacher')
      student.map(item=>{
        console.log("names:",item.name)
      })
      res.status(200).json({ msg: "Succesfully Fetched Mentors", student });
      
    } catch (error) {
      console.log("Error", error);
      res.status(404).json({ Msg: "Error", error });
    }
  };

exports.updateStudent = async (req, res) => {
  console.log(req.body);
  try {
    const student = await Student.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    console.log(student);
    res.status(200).json({ msg: "Update Succesfull", student });
  } catch (error) {
    console.log("Error", error);
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete({ _id: req.params.id });
    console.log(student);
    res.status(500).json({ msg: "Delete Succesfull", student });
  } catch (error) {
    console.log("Error", error);
  }
};
