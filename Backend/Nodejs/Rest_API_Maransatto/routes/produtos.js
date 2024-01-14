const { error } = require("console");

const router = require("express").Router();
const mysql = require('../mysql').pool;

// Retorna todos os produtos
router.get('/', (req, res, next)=>{
  mysql.getConnection((error, conn) =>{
    if(error) return res.status(500).send({error:error})
    conn.query(
      'select * from produtos',
      (error, result, field) =>{
        conn.release()
          if(error) return res.status(500).send({error:error})
        return res.status(200).send({response: result})
  })
  })
})

// Retorna produto por id
  
router.get('/:id',(req, res, next)=>{

   if(!id) return res.send({message:"Hooo nooo"});

mysql.getConnection((error,conn) =>{
  if(error) return res.status(500).send({error:error})
  conn.query( 'select * from produtos where id_produto = ?',
    [req.params.id],
    (error, result, field) =>{
      conn.release()
       if(error) return res.status(500).send({error:error})
      return res.status(200).send({response: result})
    })
})
})

// cadastra um produto
router.post('/', (req, res, next)=>{
  const produto = { 
    nome: req.body.nome,
    preco: req.body.preco
  }
  mysql.getConnection((error, conn)=>{
    if(error) return res.status(500).send({error:error})
    conn.query(
      'insert into produtos(nome, preco) values (?,?)',
      [req.body.nome, req.body.preco],
      (error, result, field) => {
        conn.release();
        if(error) return res.status(500).send({error:error})
        return res.status(201).send({
            message:"Produto inserido com sucesso",
            id_produto: result.insertId
          })
        })
   }) 
})
    

//atualiza um produto
router.patch('/', (req, res, next)=>{
  mysql.getConnection((error, conn)=>{
    if(error) return res.status(500).send({error:error})
    conn.query(
      `update produtos set nome=?, preco=? where id_produto = ?`,
      [req.body.nome, req.body.preco, req.body.id],
      (error, result, field) => {
        conn.release();
        if(error) return res.status(500).send({error:error})
        return res.status(202).send({ 
        message:"Produto alterado com sucesso",
        itensAltered:result.affectedRows })
        })
   }) 
})

router.delete('/', (req, res, next)=>{
  mysql.getConnection((error, conn)=>{
    if(error) return res.status(500).send({error:error})
    conn.query(
      `delete from produtos where id_produto = ?`,
      [req.body.id],
      (error, result, field) => {
        conn.release();
        if(error) return res.status(500).send({error:error})
        return res.status(202).send({ 
        message:"Produto removido com sucesso",
        itensDeleted:result.affectedRows })
        })
   }) 
})


module.exports = router