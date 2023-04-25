const mongoose=require("mongoose");

const studentSchema=mongoose.Schema({
    roll_no:{
        type: Number,
    },
    name:{
        type:String,
    },
    marks:{
        "English": {
            type:Number,
        },
        "Maths": {
            type:Number,
        },
        "Hindi": {
            type:Number,
        },
        "Science": {
            type:Number,
        },
        "Social Science": {
            type:Number,
        },
    }
});
module.exports=mongoose.model("Student",studentSchema);