const model = require('../model')
var tempId = 0;
const data = {
  "nome":"Luiz",
  "sobrenome":"Mendes",
  "registro":"20407",
}

it('deve criar um funcionario',async()=>{  
 
  const funcionario = await model.create(data)
  
  tempId = funcionario.id
  result = {
    "nome":funcionario.nome,
    "sobrenome":funcionario.sobrenome,
    "registro":funcionario.registro,
  }

  expect(result).toEqual(data)

})

it('deve buscar todos os registros no banco, nesse caso 2',async()=>{
  /**
   * cria mais um funcionario
   */
  dataTran = {
    "nome":"Luiz1",
    "sobrenome":"Mendes1",
    "registro":"204087",
  }  
  await model.create(dataTran)

  const funcionario = await model.findAll()
  expect(funcionario.length).toEqual(2)

})

it('deve buscar o objeto com o id do primeiro teste criado',async()=>{
  const funcionario = await model.findByPk(tempId)

  result = {
    "nome":funcionario.nome,
    "sobrenome":funcionario.sobrenome,
    "registro":funcionario.registro,
  }
  expect(result).toEqual(data)
})

it('deve alterar o objeto com o primeiro id para nome = Fernando',async()=>{
  const dataUpdate = {
    "nome":"Fernando",
    "sobrenome":"Mendes",
    "registro":"20407",
  }
  const result = await model.update(tempId,dataUpdate)
  expect(result[0]).toEqual(1)
})

it('deve excluir o primeiro registro de insersão inicial',async()=>{
  const result = await model.delete(tempId)
  expect(result).toEqual(1)
})