const asyncHandller=(requestHandler)=>{
    return (req,res,next)=>{
         Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))

    }

}


// function asyncHAndler(fun){

//    return async(req,res,next)=>{
//     try {
//         await fun(req,res,next)
//         next()
//     } catch (error) {
//         res.status(err.code|| 500).json({
//             sucess:false,
//             message:error.message,
//             status:500
//         })
//         console.log(error);    
//     }
//     }

//  }

export default asyncHandller;
