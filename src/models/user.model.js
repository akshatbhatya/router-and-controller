import mongoose from "mongoose";
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken";

const userSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        lowercase:true,
        trim:true,
        unique:true
    },
    fullName:{
        type:String,
        required:[true,"fullname is required"],
        index:true
    },
    avtar:{
        type:String,
        required:[true,"avar is required"]
    },
    coverAvtar:{
        type:String,
        required:false,
    },
    watchHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"video"
        }
    ],
    password:{
        type:String,
        required:[true,"password is required"]
    },
    refreshToken:{
        type:String,
        required:true
    }

},{timestamps:true});

// password encryption middlewares

userSchema.pre("save",async function(){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10);
    }
});

//  password comparison

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)

}

// add jwt token access-token

userSchema.methods.generateAccessToken=async function(){
   return await jwt.sign({
        _id:this.id,
        email:this.email,
        username:this.username,
        fullName:this.fullName
    },
    process.env.ACCESS_TOKEN,
    {
        expiresIn:process.env.EXPIRE_ACESS_TOKEN
    }
    )
};

// jwt refresh token 

userSchema.methods.generateRefreshToken=async function(){

    return await jwt.sign({
        _id:this.id
    },
    process.env.REFRESH_TOKEN,
    {
        expiresIn:process.env.EXPIRE_REFRESH_TOKEN
    }
    )

}

export const user=mongoose.model("user",userSchema);