const asyncHandler=require("express-async-handler");
const { Connection } = require("mongoose");
const Student = require("../model/studentModel");
//@desc Get all students
//@route Get/api/class/students
//@access public
const getStudents=asyncHandler(async(req,res)=>{
    const students=await Student.find({});
    res.status(200).json(students);
});
// @desc Get students marks
// @route Get/api/class/:roll
// @access public
const getMarks=asyncHandler(async(req,res)=>{
    const marks=await Student.find({roll_no:req.params.roll},{marks:1,_id:0});
    res.status(200).json(marks);
});
// @desc Get students marks
// @route Get/api/class/:roll
// @access public
const addStudent=asyncHandler(async(req,res)=>{
    console.log(req.body);
    const {roll_no,name,marks}=req.body;
    const student=await Student.create({
        roll_no,
        name,
        marks
    });
    res.status(200).json({student});
});
module.exports={getStudents,getMarks,addStudent};