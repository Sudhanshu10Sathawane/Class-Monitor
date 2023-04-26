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
// @desc POst students marks
// @route post/api/class/student
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
// @desc Get students marks
// @route get/api/class/student
// @access public
//query for finding percentage in mongodb for our Schema
/*db.students.aggregate([ { $group: { _id: "$roll_no", avgMarks:{$avg:{$sum: ["$marks.English", "$marks.Maths", "$marks.Hindi", "$marks.Science", "$marks.Social Science"] }} } },{$project:{roll_no:"$_id",Percentage:{$divide:["$avgMarks",5]}}}])*/
// [
//     { _id: 10, roll_no: 10, Percentage: 84.8 },
//     { _id: 6, roll_no: 6, Percentage: 84.6 },
//     { _id: 11, roll_no: 11, Percentage: 70.8 },
//     { _id: 1, roll_no: 1, Percentage: 82.2 },
//     { _id: 4, roll_no: 4, Percentage: 86.4 },
//     { _id: 2, roll_no: 2, Percentage: 84.6 },
//     { _id: 7, roll_no: 7, Percentage: 84.8 },
//     { _id: 9, roll_no: 9, Percentage: 86 },
//     { _id: 5, roll_no: 5, Percentage: 84.8 },
//     { _id: 3, roll_no: 3, Percentage: 82 },
//     { _id: 8, roll_no: 8, Percentage: 86.4 }
// ]
const getPercentage=asyncHandler(async(req,res)=>{
    const avgMarks = await Student.aggregate(
      [ { $group: { _id: "$roll_no", avgMarks:{$avg:{$sum: ["$marks.English", "$marks.Maths", "$marks.Hindi", "$marks.Science", "$marks.Social Science"] }} } },{$project:{roll_no:"$_id",Percentage:{$divide:["$avgMarks",5]}}},{$sort:{Percentage:-1}}]);
    res.status(200).json({avgMarks});
});
module.exports={getStudents,getMarks,addStudent,getPercentage};