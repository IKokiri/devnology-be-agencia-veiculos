const model = require('../model')
var tempId = 0;
const data = {"marca":"FIAT"}

it('deve criar uma marca',async()=>{  

  const marca = await model.create(data)
  
  tempId = marca.id
  result = {"marca": marca.marca}

  expect(result).toEqual(data)

})

it('deve buscar todos os registros no banco, nesse caso 2',async()=>{
  /**
   * cria mais uma marca
   */
  dataTran = {"marca":"RENAULT"}  
  await model.create(dataTran)

  const marca = await model.findAll()
  expect(marca.length).toEqual(2)

})

it('deve buscar o objeto com o id do primeiro teste criado',async()=>{
  const marca = await model.findByPk(tempId)

  result = {"marca": marca.marca}
  expect(result).toEqual(data)
})

it('deve alterar o objeto com o primeiro id para HONDA',async()=>{
  const dataUpdate = {"marca":"HONDA"}
  const result = await model.update(tempId,dataUpdate)
  expect(result[0]).toEqual(1)
})

it('deve excluir o primeiro registro de insersão inicial',async()=>{
  const result = await model.delete(tempId)
  expect(result).toEqual(1)
})