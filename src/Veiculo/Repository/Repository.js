const db = require('../../../models')
const model = db.Veiculo

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
    const result = model.update({ 
        id_marca: body.id_marca,
        id_modelo: body.id_modelo,
        ano_fabricacao: body.ano_fabricacao,
        placa: body.placa,
        cor: body.cor,
        chassi: body.chassi,
    }, { where: { id: id } })
        .then(function (retorno) {
            return retorno
        })
    return result
}
exports.delete = (id) => {
    const result = model.destroy({ where: { id: id } })
        .then(function (retorno) {
            return retorno
        })
    return result
}

