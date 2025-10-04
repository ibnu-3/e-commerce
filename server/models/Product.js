import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User', required:true,},
    name:{type:String, required:true},
    category:{type:String, required:true},
    description:{type:String},
    images:{type:[String], default:[]},
    newPrice:{type:Number, required:true,},
    oldPrice:{type:Number, required:true,},
    countInStock:{type:Number, required:true, default:0},
    isPinned:{type:Boolean, default:false},
},{timestamps:true})
const Product =mongoose.model('Product', productSchema);
export default Product