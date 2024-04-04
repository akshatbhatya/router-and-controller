import { v2 as cloudinary } from "cloudinary";
import fs from "fs"
          
cloudinary.config({ 
  cloud_name:process.env.cloudinary_cloud_name,
  api_key:cloudinary_api_key,
  api_secret:cloudinary_api_secret,
});

const uploadFile=async(localFileUpload)=>{
    try {
        if(!localFileUpload)return null;
        const response =await cloudinary.uploader.upload(localFileUpload,{resource_type:"auto"});
        console.log("file is uploded",response);
        return response;
        
    } catch (error) {
            fs.unlinkSync(localFileUpload)
            console.log(error);
    }
}

uploadFile()

export default uploadFile;