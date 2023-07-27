import express from "express";
import db from "./config/dbConnect.js";
import category from "./models/Category.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app  = express();

app.use(express.json())  

app.get('/', (req, res) => {
  category.find((err, category) => {
    res.json(category)
  })})
    

export default app