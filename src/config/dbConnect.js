import mongoose from "mongoose"//mongoose

mongoose.connect("mongodb+srv://rlacerdafermino:123@cluster0.d05ya0h.mongodb.net/");
//conezão com o atlas //

let db = mongoose.connection;
// criando db com mongoose

export default db;
// exportando db com mongoose