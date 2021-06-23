const model = require('../model')
var tempId = 0;
const data = {
  "id_venda":1,
  "id_funcionario":1,
  "comissao":200.20,
}

it('deve criar uma comissao',async()=>{  

  const comissao = await model.create(data)
  
  tempId = comissao.id
  result = {
    "id_venda":comissao.id_venda,
    "id_funcionario":comissao.id_funcionario,
    "comissao":comissao.comissao,
  }

  expect(result).toEqual(data)

})

it('deve buscar todos os registros no banco, nesse caso 2',async()=>{
  /**
   * cria mais uma venda
   */
  dataTran = {
    "id_venda":2,
    "id_funcionario":2,
    "comissao":3400.20,
  }

  await model.create(dataTran)

  const comissao = await model.findAll()
  expect(comissao.length).toEqual(2)

})
