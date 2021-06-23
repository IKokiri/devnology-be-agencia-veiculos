const routes = require('express').Router()
const model = require('./model')
const recurso = 'comissao'

routes.post(`/v1/${recurso}`, async (req,res,next)=>{
    try{
        const obj = await model.create(req.body)
        res.status(201).json(obj)
    }catch(error){
        res.status(500).json({"error":"a comissao nao pode ser criada, contate o suporte."})
    }
})

routes.get(`/v1/${recurso}`, async (req,res,next)=>{
    try{
        const obj = await model.findAll()
        res.status(200).json(obj)
    }catch(error){
        res.status(500).json({"error":"os recursos não estão disponiveis, contate o suporte"})
    }
})

module.exports = routes