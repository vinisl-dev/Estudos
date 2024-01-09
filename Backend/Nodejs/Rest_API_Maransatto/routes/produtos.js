const router = require("express").Router();

router.get('/', (req, res, next)=>{
  res.status(200).send({
    message:"usando route"
  })
})

router.get('/:id',(req, res, next)=>{
  const  {id} =  req.params;
  console.log(id)

  if(id == null || undefined){
    res.send({
      message:"Hooo nooo"
    })
  }

  res.status(201).send({
    message:"created ID: ",
    id
})
})

router.post('/', (req, res, next)=>{
  res.status(201).send({
    message:"Created"
  })
})

module.exports = router;