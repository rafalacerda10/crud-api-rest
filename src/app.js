// Criar um crud de contato com: // Nome, // telefone 1 // Telefone 2// Categoria_id

import express from "express";
import db from "./config/dbConnect.js";
import category from "./models/Category.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app  = express();
app.use(express.json());    

// const categoria = [
// {"id":1,"name":"Valdeci", "Telefone":234567891, "telefone_1":234567892,"categoria":"acao"} 
// ]

app.get('/', (req, res) => {
    category.find((err, category) => {
        res.status(200).json(category);
    })  
    })
app.post('/', (req, res) => {
    categoria.push(req.body);
    res.status(201).send('Welcome to the database');
    
});
// app.put('/:id', (req, res) => {
// });
// app.delete ('/:id', (req, res) => {});

export default app