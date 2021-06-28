require('dotenv').config({
    path: process.env.NODE_ENV.trim() === 'test' ? '.env.test' : process.env.NODE_ENV.trim() === 'development' ? '.env' : '.env.prod'
})

const marcaApi = require('./src/Marca/controller')
const modeloApi = require('./src/Modelo/controller')
const veiculoApi = require('./src/Veiculo/controller')
const produtoApi = require('./src/Produto/controller')
const compraApi = require('./src/Compra/controller')
const vendaApi = require('./src/Venda/controller')
const funcionarioApi = require('./src/Funcionario/controller')
const clienteApi = require('./src/Cliente/controller')
const estoqueApi = require('./src/Estoque/controller')
const comissaoApi = require('./src/Comissao/controller')
const comprarApi = require('./src/Negocio/Compra/controller')
const venderApi = require('./src/Negocio/Venda/controller')

var cors = require('cors');

const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
/**
 * Rota principal
 */
app.use('/agencia', cors(), express.json(),
    veiculoApi,
    marcaApi,
    modeloApi,
    produtoApi,
    compraApi,
    vendaApi,
    funcionarioApi,
    clienteApi,
    estoqueApi,
    comissaoApi,
    comprarApi,
    venderApi,
);

app.listen(PORT, () => {
    console.log("Olá luiz " + process.env.NODE_ENV)
})