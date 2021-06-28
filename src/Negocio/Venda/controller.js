const routes = require('express').Router()
const model = require('./model')
const recurso = 'vender'

routes.post(`/v1/${recurso}`, async (req, res, next) => {
    try {
        const obj = await model.create(req.body)
        res.status(201).json(obj)
    } catch (error) {
        res.status(500).json({ "error": error })
    }
})

routes.get(`/v1/${recurso}`, async (req, res, next) => {
    try {
        const obj = await model.findAll()
        res.status(200).json(obj)
    } catch (error) {
        res.status(500).json({ "error": error })
    }
})

module.exports = routes