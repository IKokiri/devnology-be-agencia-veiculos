const db = require('../../../models')
const model = db.Modelo

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
    const result = model.findByPk(pk)
        .then(function (retorno) {
            return retorno
        })
    return result
}

exports.update = (id, body) => {
    const result = model.update({ modelo: body.modelo }, { where: { id: id } })
        .then(function (retorno) {
            return retorno
        })
    return result
}
exports.delete = (id) => {
    const result = model.destroy({where:{id:id}})
    .then(function(retorno){
        return retorno
    })
    return result
}

