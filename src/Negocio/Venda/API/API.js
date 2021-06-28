const fetch = require("node-fetch");
require('dotenv').config({
    path: process.env.NODE_ENV.trim() === 'test' ? '.env.test' : process.env.NODE_ENV.trim() === 'development' ? '.env' : '.env.prod'
})

const base = process.env.SERVER

exports.createCompra = async (data) => {
    const response = await fetch(`${base}compra/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(console.error);

    return response;
}

exports.addEstoque = async (data) => {
    const response = await fetch(`${base}estoque/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(console.error);

    return response;
}

exports.addVenda = async (data) => {
    const response = await fetch(`${base}venda/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(console.error);

    return response;
}

exports.subEstoque = async (data) => {
    const response = await fetch(`${base}estoque/` + data.id_produto, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(console.error);

    return response;
}

exports.addComissao = async (data) => {
    const response = await fetch(`${base}comissao/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(console.error);

    return response;
}
exports.findAllCompra = async () => {
    const response = await fetch(`${base}compra/`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(console.error);

    return response;
}

exports.findAllVenda = async () => {
    const response = await fetch(`${base}venda/`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(console.error);

    return response;
}

