const marcaApi = require('./src/Marca/controller')
const veiculoApi = require('./src/Veiculo/controller') 


const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
/**
 * Rota principal
 */
app.use('/agencia',express.json(),
veiculoApi,
marcaApi
);

app.listen(PORT,()=>{
    console.log("Olá luiz")
})