const fetch = require("node-fetch");
const port = 4000
const base = `http://localhost:${port}/agencia/v1/`

exports.create = async (data) =>{
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