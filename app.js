require('dotenv').config({
    path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
})
const marcaApi = require('./src/Marca/controller')
const modeloApi = require('./src/Modelo/controller')
const veiculoApi = require('./src/Veiculo/controller') 
const produtoApi = require('./src/Produto/controller') 
const compraApi = require('./src/Compra/controller') 
const vendaApi = require('./src/Venda/controller') 

const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
/**
 * Rota principal
 */
app.use('/agencia',express.json(),
veiculoApi,
marcaApi,
modeloApi,
produtoApi,
compraApi,
vendaApi,
);

app.listen(PORT,()=>{
    console.log("Olá luiz "+process.env.NODE_ENV)
})