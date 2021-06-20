const model = require('../model')
var tempId = 0;
const data = {
  "nome":"Luiz",
  "sobrenome":"Mendes",
  "email":"20407",
}

it('deve criar um cliente',async()=>{  
 
  const cliente = await model.create(data)
  
  tempId = cliente.id
  result = {
    "nome":cliente.nome,
    "sobrenome":cliente.sobrenome,
    "email":cliente.email,
  }

  expect(result).toEqual(data)

})

it('deve buscar todos os emails no banco, nesse caso 2',async()=>{
  /**
   * cria mais um cliente
   */
  dataTran = {
    "nome":"Luiz1",
    "sobrenome":"Mendes1",
    "email":"204087",
  }  
  await model.create(dataTran)

  const cliente = await model.findAll()
  expect(cliente.length).toEqual(2)

})

it('deve buscar o objeto com o id do primeiro teste criado',async()=>{
  const cliente = await model.findByPk(tempId)

  result = {
    "nome":cliente.nome,
    "sobrenome":cliente.sobrenome,
    "email":cliente.email,
  }
  expect(result).toEqual(data)
})

it('deve alterar o objeto com o primeiro id para nome = Fernando',async()=>{
  const dataUpdate = {
    "nome":"Fernando",
    "sobrenome":"Mendes",
    "email":"20407",
  }
  const result = await model.update(tempId,dataUpdate)
  expect(result[0]).toEqual(1)
})

it('deve excluir o primeiro email de insersão inicial',async()=>{
  const result = await model.delete(tempId)
  expect(result).toEqual(1)
})