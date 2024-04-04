import asyncHandller from "../utils/asyncHandler.js";


const registerUser=asyncHandller(async(req,res)=>{
    res.json({
        message:"ok",
        status:200
    })

})

export {registerUser};