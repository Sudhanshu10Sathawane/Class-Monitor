const express=require('express');
const { getStudents, getMarks, addStudent, getPercentage } = require('../controller/studentController');
const router=express.Router();
router.route("/students").get(getStudents);
router.route("/:roll").get(getMarks);
router.route("/students/per").get(getPercentage).post(addStudent);
module.exports=router;