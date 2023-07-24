import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
   {
     id: {type:String},
    name: {type:String, required:true},
    telefone_1: {type:Number},
    categoria: {type : String, required:true}
   },
);
const category =mongoose.model('category', categorySchema);

export default category;