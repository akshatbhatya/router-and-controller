import mongoose from "mongoose";

const videoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"]
    },
    description:{
        type:String,
        required:[true,"descreption is required"]
    },
    videoOwner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    videoDuration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    thumbnail:{
        type:String,
        required:true

    },
    videoFile:{
        type:String,
        required:true
    }

},{timestamps:true});

export const video=mongoose.model("video",videoSchema);