import dotenv from "dotenv";
dotenv.config({path:"./env"});
import connectDb from "./db/index.js";
import app from "./app.js"


const portNo=process.env.PORT||7860;

connectDb().then(()=>{
    app.listen(portNo,()=>{
        console.log("server is start",portNo);

    })

}).catch((err)=>console.log(err));