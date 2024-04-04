import dotenv from "dotenv";
dotenv.config({path:"./env"});
import connectDb from "./db/index.js";
import app from "./app.js"


connectDb().then(()=>{
    app.listen(process.env.PORT||7860,()=>{
        console.log("server is start");

    })

}).catch((err)=>console.log(err));