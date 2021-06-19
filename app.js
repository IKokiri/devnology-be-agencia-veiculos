const veiculoApi = require('./src/Veiculo/controller') 

const express = require('express')
const app = express()
/**
 * Rota principal
 */
app.use('/agencia/',veiculoApi);

app.listen(4000,()=>{
    console.log("Olá luiz")
})