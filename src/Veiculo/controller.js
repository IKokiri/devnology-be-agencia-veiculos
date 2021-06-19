const routes = require('express').Router()
const model = require('./model')
const recurso = 'veiculo'

routes.get(`/${recurso}/v1`,(req,res,next)=>{
    const obj = model.teste()
    res.status(200).json(obj)
})

module.exports = routes