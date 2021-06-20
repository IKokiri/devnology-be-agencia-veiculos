const routes = require('express').Router()
const model = require('./model')
const recurso = 'marca'

routes.post(`/v1/${recurso}`, async (req,res,next)=>{
    try{
        const obj = await model.create(req.body)
        res.status(201).json(obj)
    }catch(error){
        res.status(500).json({"error":"a marca nao pode ser criada, contate o suporte."})
    }
})

module.exports = routes