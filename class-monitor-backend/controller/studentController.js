const asyncHandler=require("express-async-handler");
const { Connection } = require("mongoose");
const studentModel = require("../model/studentModel");
//@desc Get all students
//@route Get/api/class/students
//@access public
const getStudents=asyncHandler(async(req,res)=>{
    const students=await studentModel.find({});
    res.status(200).json(students);
});
// @desc Get students marks
// @route Get/api/class/:roll
// @access public
const getMarks=asyncHandler(async(req,res)=>{
    const marks=await studentModel.find({roll_no:req.params.roll},{marks:1,_id:0});
    res.status(200).json(marks);
});
module.exports={getStudents,getMarks};