const express=require('express');
const { getStudents, getMarks, addStudent } = require('../controller/studentController');
const router=express.Router();
router.route("/students").get(getStudents);
router.route("/:roll").get(getMarks);
router.route("/student").post(addStudent);
module.exports=router;