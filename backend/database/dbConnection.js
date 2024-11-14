import mongoose from "mongoose";
export const dbConnection=()=>{
    mongoose.connect(process.env.mongo_uri,{
        dbName:"Restaurant"
    }).then(()=>{
        console.log("Connected to database successfully");
    }).catch(err=>{
        console.log(`Some error occured while connecting to database ${err}`);
    });
}