// Criar um crud de contato com: // Nome

import express from "express";
import db from "./config/dbConnect.js";
import category from "./models/Category.js";


//db on para verificar se está funcionando

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () =>
      {
      console.log('conexão com o banco feita com sucesso')
      })


// app.use para utilização do express

const app  = express();
app.use(express.json());    



// Get para verificar o db

app.get('/', (req, res) =>{
      category.find((err, category) =>
      {
      res.status(200).json(category);
      }
      )  
})


// Post metodo para adicionar

app.post('/', (req, res) =>
{
category.create(req.body, (err, category) => 
      {
      res.status(201).json(category);
      })
});


// app.put para modificar os contatos

app.put('/:id', (req, res) =>
{
  const id = req.params.id;
  category.findByIdAndUpdate(id, {$set: req.body}, (err) =>
      {
            if(!err)
            {
                  res.status(200).send({message: 'Contato atalizado com sucesso'});
            }         
            else {
                  res.status(500).send({message: 'Erro ao atualizar'});
            }
      })
});

// app.delete para deletar contatos

app.delete('/:id', (req,res) => 
{
      const id = req.params.id;
      category.findByIdAndDelete(id, (err) => 
      {
      if(!err){
            res.status(200).send({message: 'Contato deletado com sucesso'});
              } 
      else {
            res.status(500).send({message: 'Erro ao deletar'});
            }
      })
})

// para realizar aaa buscar e mostrar pelo GET

app.get('/:id', function(req, res)
      {
      const id = req.params.id;        
      category.findById(id, (err, category) => 
            {      
            res.status(200).send(category);                                    
            })                                  
      })     

export default app