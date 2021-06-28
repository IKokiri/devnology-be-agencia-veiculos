const repository = require("./Repository/Repository")

exports.create = (data) => {
    data.comissao = data.valor * 0.1
    return repository.create(data)
}

exports.findAll = () => {
    return repository.findAll()
}