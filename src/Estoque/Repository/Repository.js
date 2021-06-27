const db = require('../../../models')
const model = db.Estoque

exports.create = (data) => {
    const result = model.create(data)
        .then(function (retorno) {
            return retorno
        })
    return result
}

exports.findAll = () => {
    const result = model.findAll()
        .then(function (retorno) {
            return retorno
        })
    return result
}

exports.findByPk = (pk) => {
    const result = model.findOne({ where: { "id_produto": pk } })
        .then(function (retorno) {
            return retorno
        })
    return result
}

exports.delete = (id) => {
    const result = model.destroy({ where: { id_produto: id } })
        .then(function (retorno) {
            return retorno
        })
    return result
}

