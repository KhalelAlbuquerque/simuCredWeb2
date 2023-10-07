require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose")
const conn = require('./db/conn')
const bankRoutes = require('./router/bankRouter')

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//rotas banco
app.use('/', bankRoutes)

conn()
mongoose.connection.once('open', ()=>{

    console.log("Conexão feita")
    
    const PORT = 3001

    app.listen(PORT, ()=>{
        console.log(`Servidor local rodando na porta ${PORT}`)
    })

})