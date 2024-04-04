import  Express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
const app=Express();

//  middleware

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//  add middlewares for json file accept 16 kb 

app.use(Express.json({limit:"16kb"}))
app.use(Express.urlencoded({
    limit:"16kb",
    extended:true}));
app.use(cookieParser());
app.use(Express.static("public"));

//  routes import 

import userRouter from "./routes/user.routes.js"
app.use("/api/v1/user",userRouter);



export default app;