const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  getOneStudent,
  getOneStudentMentor,
  getStudentPlacement,
} = require("../controller/student");

router.post("/student", createStudent);

router.get("/student", getStudent);
router.get("/student-placement/:id", getStudentPlacement);
router.get("/student-mentor/:id", getOneStudentMentor);

router.get("/student/:id", getOneStudent);

router.put("/student/:id", updateStudent);

router.delete("/student/:id", deleteStudent);

module.exports = router;
