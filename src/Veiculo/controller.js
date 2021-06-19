const routes = require('express').Router()
const model = require('./model')
const recurso = 'veiculo'

routes.get(`/v1/${recurso}`,(req,res,next)=>{
    const obj = model.teste()
    res.status(200).json(obj)
})

module.exports = routes