import  Express, { json, urlencoded }  from "express";
import cors from "cors"
const app=Express();
//  middleware

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//  add middlewares for json file accept 16 kb 
app.use(json({limit:"16kb"}))

app.use(urlencoded({
    limit:"16kb",
    extended:true}))

export default app;