const api = require('../API/API')

exports.create = async (data) => {

    let result = await api.addVenda(data)

    if (result.id) {
        estoque = {
            "id_produto": result.id_produto
        }
        comissao = {
            "id_venda": result.id,
            "id_funcionario": data.id_funcionario,
            "comissao": data.comissao,
        }
        await api.subEstoque(estoque)
        await api.addComissao(comissao)
    }

    return result
}

exports.findAll = async () => {

    let result = await api.findAllVenda()
    return result
}


