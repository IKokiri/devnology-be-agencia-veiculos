const model = require('../model')
var tempId = 0;
const data = {"modelo":"POLO"}

it('deve criar uma modelo',async()=>{  

  const modelo = await model.create(data)
  
  tempId = modelo.id
  result = {"modelo": modelo.modelo}

  expect(result).toEqual(data)

})

it('deve buscar todos os registros no banco, nesse caso 2',async()=>{
  /**
   * cria mais uma modelo
   */
  dataTran = {"modelo":"BRAVA"}  
  await model.create(dataTran)

  const modelo = await model.findAll()
  expect(modelo.length).toEqual(2)

})

it('deve buscar o objeto com o id do primeiro teste criado',async()=>{
  const modelo = await model.findByPk(tempId)

  result = {"modelo": modelo.modelo}
  expect(result).toEqual(data)
})

it('deve alterar o objeto com o primeiro id para CELTA',async()=>{
  const dataUpdate = {"modelo":"CELTA"}
  const result = await model.update(tempId,dataUpdate)
  expect(result[0]).toEqual(1)
})

it('deve excluir o primeiro registro de insersão inicial',async()=>{
  const result = await model.delete(tempId)
  expect(result).toEqual(1)
})