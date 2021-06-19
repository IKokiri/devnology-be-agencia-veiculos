const db = require('../../models')
const model = db.Marca

exports.create = (data) =>{
    const result = model.create(data)
    .then(function(retorno){
        return retorno        
    })
    return result
}