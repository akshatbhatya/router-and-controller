import mongoose from "mongoose";
import  databaseName  from "../constants.js";

const connectDb=async()=>{
       try {
        
       const dataResponse= await mongoose.connect(`${process.env.MONGODB_URI}/${databaseName}`);
       console.log(dataResponse.connection.host);
       return dataResponse.connection.host
       }
        catch (error) {
        console.log(error,"error is occured in db connection");
        
       }
    
}

export default connectDb;