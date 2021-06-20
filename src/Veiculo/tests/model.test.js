const model = require('../model')
var tempId = 0;
const data = {
  "id_marca":1,
  "id_modelo":1,
  "ano_fabricacao":1990,
  "placa":"HKY-2053",
  "cor":"PRETO",
  "chassi":"34234JDSFHK238",
}

it('deve criar um veiculo',async()=>{  

  const veiculo = await model.create(data)
  
  tempId = veiculo.id
  result = {
    "id_marca":veiculo.id_marca,
    "id_modelo":veiculo.id_modelo,
    "ano_fabricacao":veiculo.ano_fabricacao,
    "placa":veiculo.placa,
    "cor":veiculo.cor,
    "chassi":veiculo.chassi,
  }

  expect(result).toEqual(data)

})

it('deve buscar todos os registros no banco, nesse caso 2',async()=>{
  /**
   * cria mais uma modelo
   */
  dataTran = {
    "id_marca":2,
    "id_modelo":2,
    "ano_fabricacao":1991,
    "placa":"HKY-2253",
    "cor":"AZUL",
    "chassi":"238947234792ASD",
  }
  await model.create(dataTran)

  const veiculo = await model.findAll()
  expect(veiculo.length).toEqual(2)

})

it('deve buscar o objeto com o id do primeiro teste criado',async()=>{
  const veiculo = await model.findByPk(tempId)

  result = {
    "id_marca":veiculo.id_marca,
    "id_modelo":veiculo.id_modelo,
    "ano_fabricacao":veiculo.ano_fabricacao,
    "placa":veiculo.placa,
    "cor":veiculo.cor,
    "chassi":veiculo.chassi,
  }
  expect(result).toEqual(data)
})

it('deve alterar o objeto com o primeiro id para a placa XXX-1234',async()=>{
  const dataUpdate = {
    "id_marca":2,
    "id_modelo":2,
    "ano_fabricacao":1991,
    "placa":"XXX-1234",
    "cor":"AZUL",
    "chassi":"238947234792ASD",
  }
  const result = await model.update(tempId,dataUpdate)
  expect(result[0]).toEqual(1)
})

it('deve excluir o primeiro registro de insersão inicial',async()=>{
  const result = await model.delete(tempId)
  expect(result).toEqual(1)
})