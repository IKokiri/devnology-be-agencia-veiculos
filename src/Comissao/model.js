const repository = require("./Repository/Repository")

exports.create = (data) =>{
    return repository.create(data)
}

exports.findAll = () =>{
    return repository.findAll()
}
