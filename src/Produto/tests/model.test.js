const model = require('../model')
var tempId = 0;
const data = {
  "id_veiculo":1,
  "valor":1355.20,
}

it('deve criar uma produto',async()=>{  

  const produto = await model.create(data)
  
  tempId = produto.id
  result = {
    "id_veiculo":produto.id_veiculo,
    "valor":produto.valor,
  }

  expect(result).toEqual(data)

})

it('deve buscar todos os registros no banco, nesse caso 2',async()=>{
  /**
   * cria mais uma produto
   */
  dataTran = {
    "id_veiculo":2,
    "valor":5355.20,
  }  
  await model.create(dataTran)

  const produto = await model.findAll()
  expect(produto.length).toEqual(2)

})

it('deve buscar o objeto com o id do primeiro teste criado',async()=>{
  const produto = await model.findByPk(tempId)

  result = {
    "id_veiculo":produto.id_veiculo,
    "valor":produto.valor,
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