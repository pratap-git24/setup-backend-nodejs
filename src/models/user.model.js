import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true            
        },
        fullName:{
            type:String,
            required:true,
            trim:true,
            index:true
        },
        password:{
            type: String,
            required:[true, "PAssword is required"]
        },
        avatar:{
            type:String,
            required:true,
        },
        coverImage:{
            type:String,            
        },
        watchHistory:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Video'
            }
        ],
        refreshtoken:{
            type:String,            
        },
    },{
        timestamps:true
    }
)

export const User = mongoose.model("User",userSchema)