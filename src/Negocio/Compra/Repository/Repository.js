const api = require('../API/API')

exports.create = (data) => {

    let result = api.create(data)
    
    return result
}


