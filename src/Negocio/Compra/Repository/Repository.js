const api = require('../API/API')

exports.create = async (data) => {

    let result = await api.createCompra(data)
    if (result.id) {
        estoque = {
            "id_produto": result.id_produto
        }
        let resultEstoque = await api.addEstoque(estoque)
    }

    return result
}


