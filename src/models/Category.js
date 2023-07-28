import mongoose from "mongoose";

const categorySchema = new mongoose.Schema
(
   // name :type 
   {
   name: {type:String, required:true},
   },

   // para não aparecer a verificão de versão com o mogoose
   {
   versionKey:false,
   }
);
const category = mongoose.model('category', categorySchema);

export default category;