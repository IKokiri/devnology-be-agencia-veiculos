const model = require('../model')
var tempId = 0;
const data = {
  "id_produto":1,
  "data_compra":"2020-01-01",
  "valor":2000.20,
}

it('deve criar uma compra',async()=>{  

  const compra = await model.create(data)
  
  tempId = compra.id
  result = {
    "id_produto":compra.id_produto,
    "data_compra":compra.data_compra,
    "valor":compra.valor,
  }

  expect(result).toEqual(data)

})

it('deve buscar todos os registros no banco, nesse caso 2',async()=>{
  /**
   * cria mais uma compra
   */
  dataTran = {
    "id_produto":2,
    "data_compra":"2020-02-02",
    "valor":3400.20,
  }

  await model.create(dataTran)

  const compra = await model.findAll()
  expect(compra.length).toEqual(2)

})

it('deve buscar o objeto com o id do primeiro teste criado',async()=>{
  const compra = await model.findByPk(tempId)

  result = {
    "id_produto":compra.id_produto,
    "data_compra":compra.data_compra,
    "valor":compra.valor,
  }
  expect(result).toEqual(data)
})

it('deve alterar o objeto com o primeiro id para valor = 7000',async()=>{
  const dataUpdate = {
    "valor":7000.00,
  }  
  const result = await model.update(tempId,dataUpdate)
  expect(result[0]).toEqual(1)
})

it('deve excluir o primeiro registro de insersão inicial',async()=>{
  const result = await model.delete(tempId)
  expect(result).toEqual(1)
})