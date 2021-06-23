const routes = require('express').Router()
const model = require('./model')
const recurso = 'estoque'

routes.post(`/v1/${recurso}`, async (req,res,next)=>{
    try{
        const obj = await model.create(req.body)
        res.status(201).json(obj)
    }catch(error){
        res.status(500).json({"error":error})
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

routes.get(`/v1/${recurso}/:id`, async (req,res,next)=>{
    try{
        const obj = await model.findByPk(req.params.id)
        res.status(200).json(obj)
    }catch(error){
        res.status(500).json({"error":"os recursos não estão disponiveis, contate o suporte"})
    }
})

routes.delete(`/v1/${recurso}/:id`,async(req,res,next)=>{
        try {
            const obj = await model.delete(req.params.id)
            res.status(200).json(obj)
        } catch (error) {
            res.status(500).json({"error":"os recursos não estão disponiveis, contate o suporte"})  
        }
})

module.exports = routes