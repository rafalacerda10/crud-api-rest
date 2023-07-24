// Criar um crud de contato com:
// Nome, 
// telefone 1
// Telefone 2
// Categoria_id

import express from "express";
import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app  = express();
app.use(express.json());    

const categoria = [
    {"nome": "Rafael",telefone: 1144218098,telefone_1 : 11995738799, id: 1},
    {"nome": "Rafael",telefone: 1144218098,telefone_1 : 11995738799, id: 2}   
]

app.get('/', (req, res) => {
    res.status(200);
    res.json(categoria);
});
app.post('/', (req, res) => {
    categoria.push(req.body);
    res.status(201).send('Welcome to the database');
    
});
app.put('/:id', (req, res) => {
});
app.delete ('/:id', (req, res) => {});

export default app