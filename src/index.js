import dotenv from "dotenv";
dotenv.config({path:"./env"});
import connectDb from "./db";
import app from "./app"


connectDb().then(()=>{
    app.listen(process.env.PORT||7860,()=>{
        console.log("server is start");

    })

}).catch((err)=>console.log(err));