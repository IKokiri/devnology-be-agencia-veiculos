const veiculoApi = require('./src/Veiculo/controller') 

const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
/**
 * Rota principal
 */
app.use('/agencia/',veiculoApi);

app.listen(PORT,()=>{
    console.log("Olá luiz")
})