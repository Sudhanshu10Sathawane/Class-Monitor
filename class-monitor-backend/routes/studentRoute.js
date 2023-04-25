const express=require('express');
const { getStudents, getMarks } = require('../controller/studentController');
const router=express.Router();
router.route("/students").get(getStudents);
router.route("/:roll").get(getMarks);
module.exports=router;