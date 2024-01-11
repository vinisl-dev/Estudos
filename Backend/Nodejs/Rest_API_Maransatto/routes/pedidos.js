const router = require("express").Router();


router.get('/', (req, res, next)=>{
  return res.status(200).send({
    message:"Todos Pedidos"
  })
})
router.get('/:id', (req, res, next)=>{
  const {id} = req.params
  return res.status(200).send({
    message:"Pedido "+id
  })
})

router.post('/', (req, res, next) =>{
  const pedido = {
    id_produto: req.body.id_produto,
    quantidade: req.body.quantidade
  }
  console.log(pedido)

  return res.status(201).send({
    message:"Pedido criado",
    pedidoCriado:pedido
  })
})

router.patch('/', (req, res, next)=>{
  return res.status(202).send({
    message:"pedido alterado"
  })
})

module.exports = router;