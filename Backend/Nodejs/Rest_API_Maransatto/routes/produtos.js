const { error } = require("console");
const { response } = require("express");

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
          const response = {
            quantidade:result.length,
            produtos: result.map(prod =>{
              return {
                id_produto: prod.id_produto,
                nome: prod.nome,
                preco: prod.preco,
                request:{
                  tipo:'GET',
                  descricao:'Retorna todos os produtos',
                  url:'http://localhost:3000/produtos/'
                }
              }
            })
        }
        return res.status(200).send(response)
  })
  })
})

// Retorna produto por id
  
router.get('/:id',(req, res, next)=>{

mysql.getConnection((error,conn) =>{
  if(error) return res.status(500).send({error:error})
  conn.query( 'select * from produtos where id_produto = ?',
    [req.params.id],
    (error, result, field) =>{
      conn.release()
       if(error) return res.status(500).send({error:error})

       if (result.length == 0){
          return res.status(404).send({
            mensagem: 'Não foi encontrado produto com esse ID'
          })
       }
       const response = {      
            produto:{
                id_produto: result[0].id_produto,
                nome: result[0].nome,
                preco: result[0].preco,
                request:{
                tipo:'GET',
                descricao:'Retorna um produto',
                url:'http://localhost:3000/produtos/'+result[0].id_produto
              }
          } 
    }
      return res.status(200).send(response)
    }
  )
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
        const response = {
            mensagem:'Produto inserido com sucesso',
            produtoCriado: {
                id_produto:result.id_produto,
                nome: req.body.nome,
                preco: req.body.preco,
                request:{
                  tipo:'post',
                  descricao:'Insere um produto',
                  url:'http://localhost:3000/produtos'
                }

            }
        }
        return res.status(201).send(response)
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
        const response = {
          mensagem:'Produto alterado com sucesso',
          produtoCriado: {
              id_produto:req.body.id,
              nome: req.body.nome,
              preco: req.body.preco,
              request:{
                tipo:'Patch',
                descricao:'Produto alterado',
                url:'http://localhost:3000/produtos'+req.body.id
              }

          }
      }
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
        const response = {
          mensagem:'Produto removido com sucesso',
          request: {
            tipo: 'POST',
            descricao:'Insere um produto',
            url:'http://localhost:3000/produtos'
          }
        }
        return res.status(202).send(response)
        })
   }) 
})


module.exports = router