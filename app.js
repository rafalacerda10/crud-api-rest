const express = require('express')

app.use( (req, res, next) => {
    res.status(200).send ({
        mensagem: 'COnfirmado'
    });
}); 


module.exports = app.js;