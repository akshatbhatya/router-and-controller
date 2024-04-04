import  Express, { json, urlencoded }  from "express";
import cors from "cors"
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
    extended:true}))

app.use(cookieParser())

app.use(Express.static("public"))
export default app;