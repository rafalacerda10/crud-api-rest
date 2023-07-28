// Criar um crud de contato com: // Nome

import express from "express";
import db from "./config/dbConnect.js";
import category from "./models/Category.js";


//db on para verificar se está funcionando

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
console.log('conexão com o banco feita com sucesso')
})


// app.use para utilização do express

const app  = express();
app.use(express.json());    



// Get para verificar o db

app.get('/', (req, res) => 
{
    category.find((err, category) =>
  {
        res.status(200).json(category);
  })  
})


// Post metodo para adicionar

app.post('/', (req, res) =>
{
     category.create(req.body, (err, category) => 
  {
        res.status(201).json(category);
  })
});


export default app