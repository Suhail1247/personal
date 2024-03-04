import mongoose from "mongoose";

export const userSchema=new mongoose.Schema({
    userId:{
        type:Number
    },
    subscriptionType:{
        type:String
    },
    subscriptionId:{
        type:Number
    },
    expiryDate:{
        type:Date
    }
})
export default mongoose.model('subscriptionModels',userSchema) 