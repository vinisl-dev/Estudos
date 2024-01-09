const router = require("express").Router();

// Retorna todos os produtos
router.get('/', (req, res, next)=>{
  res.status(200).send({
    message:"usando route"
  })
})

// Retorna produto por id
router.get('/:id',(req, res, next)=>{
  const  {id} =  req.params;

  if(!id){
    res.send({
      message:"Hooo nooo"
    });
  }
  res.status(201).send({
    message:`seu produto id: ${id}`,
    id
});
});
// cadastra um produto
router.post('/', (req, res, next)=>{
  res.status(201).send({
    message:"Created"
  });
});
//atualiza um produto
router.patch('/', (req, res, next)=>{
  return res.status(201).send({
    message:"Produto atualizado"
  });
});

router.delete('/', (req, res, next)=>{
  return res.status(200).send({
    message:"Produto deletado"
  });
});


module.exports = router;