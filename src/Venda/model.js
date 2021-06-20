const repository = require("./Repository/Repository")

exports.create = (data) =>{
    return repository.create(data)
}

exports.findAll = () =>{
    return repository.findAll()
}

exports.findByPk = (pk)=>{
    return repository.findByPk(pk)
}

exports.update = (id,body)=>{
    return repository.update(id,body)
}
exports.delete = (id)=>{
    return repository.delete(id)
}