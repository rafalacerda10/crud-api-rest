// Criar um crud de contato com:
// Nome, 
// telefone 1
// Telefone 2
// Categoria_id

import express from "express";

const app  = express();

const categoria = [
    {"nome": "Rafael",telefone: 1144218098,telefone_1 : 11995738799, id: 1},
    {"nome": "Rafael",telefone: 1144218098,telefone_1 : 11995738799, id: 1}   
]

app.get('/', (req, res) => {
    res.status(200);
    res.json(categoria);
});

export default app