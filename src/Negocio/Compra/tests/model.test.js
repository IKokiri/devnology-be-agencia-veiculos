const model = require('../model')
var tempId = 0;
const data = {"marca":"FIAT"}

it('Deve fazer uma compra e adicionar o produto no banco',async()=>{  

  const marca = await model.create(data)
  
  tempId = marca.id
  result = {"marca": marca.marca}

  expect(result).toEqual(data)

})
