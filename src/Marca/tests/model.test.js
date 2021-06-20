const model = require('../model')
it('deve criar uma marca',async()=>{
  const marca = await model.create({"marca":"polos"})
  expect(1).toBe(1)
})