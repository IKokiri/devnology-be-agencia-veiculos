const routes = require('express').Router()
const model = require('./model')
const recurso = 'marca'

routes.post(`/v1/${recurso}`,(req,res,next)=>{
    const obj = model.create(req.body)
    res.status(201).json(obj)
})

module.exports = routes