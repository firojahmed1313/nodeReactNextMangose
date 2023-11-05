
//DB_URL:"mongodb://0.0.0.0:27017/byenow",
/*
import mongoose from 'mongoose';

const dbConnect =()=>{
    if(mongoose.Connection.readystate >=1){
        return
    }
    console.log("dbconnect")

    mongoose.connect(process.env.DB_URL)
}

export default dbConnect
*/

const mongoose = require('mongoose');

const uri = "mongodb+srv://newgitpods:VL6eb0rHhdZJ1gv0@mdfirojahmed.chpjhjr.mongodb.net/testDetabase?retryWrites=true&w=majority";

//const DB_URL:"mongodb://0.0.0.0:27017/byenow";

mongoose.connect(uri).then(()=>{
    console.info("connected");

}).catch((error)=>{
    console.log(error);
})


const student = new mongoose.Schema({
    rollNo:Number,
    name:String,
    hight:Number
})

const Student = mongoose.model.Student || mongoose.model("Student",student);

const s1=new Student({
    id: 1,
    name:"firoj",
    hight:5.9
})

s1.save();

const s2= Student.create({
    
    name:"raihan",
    hight:5.4
})

