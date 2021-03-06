const model = require('../model')
var tempId = 0;
const data = {"id_produto":1}

it('deve adicionar um veiculo no estoque',async()=>{  

  const estoque = await model.create(data)
  
  tempId = estoque.id_produto
  result = {"id_produto": estoque.id_produto}

  expect(result).toEqual(data)

})

it('deve buscar todos os registros no banco, nesse caso 2',async()=>{
  
  dataTran = {"id_produto":2}  
  await model.create(dataTran)

  const estoque = await model.findAll()
  expect(estoque.length).toEqual(2)

})

it('deve buscar o objeto com o id do primeiro teste criado',async()=>{
  const estoque = await model.findByPk(tempId)

  result = {"id_produto": estoque.id_produto}
  expect(result).toEqual(data)
})

it('deve excluir o primeiro registro de insersão inicial',async()=>{
  const result = await model.delete(tempId)
  expect(result).toEqual(1)
})