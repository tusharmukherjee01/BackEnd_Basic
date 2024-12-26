
import mongoose from "mongoose"

const userSchema = mongoose.Schema({

  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:[true,"Password is Required"]
  }
},{timestamps:true})


const User = mongoose.model("User",userSchema)