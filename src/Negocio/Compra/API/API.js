const fetch = require("node-fetch");
require('dotenv').config({
    path: process.env.NODE_ENV.trim() === 'test' ? '.env.test' : process.env.NODE_ENV.trim() === 'development' ? '.env' : '.env.prod'
})

const base = process.env.SERVER

exports.createCompra = async (data) =>{
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


exports.addEstoque = async (data) =>{
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

    // static async create(data) {
        // response = 1
        // const response = await fetch(`${base}compra/`, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         return data
        //     })
        //     .catch(console.error);

        // return response;

    // }



// }