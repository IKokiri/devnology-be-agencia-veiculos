const routes = require('express').Router()
const model = require('./model')
const recurso = 'marca'

routes.post(`/v1/${recurso}`,(req,res,next)=>{
    try{
        const obj = model.create(req.body)
        res.status(201).json(obj)
    }catch(error){
        res.status(500).json({"error":"a marca nao pode ser criada, contate o suporte."})
    }
})

module.exports = routes