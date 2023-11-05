
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

import mongoose from "mongoose";

const DB_URL:"mongodb://0.0.0.0:27017/byenow";

mongoose.connect()