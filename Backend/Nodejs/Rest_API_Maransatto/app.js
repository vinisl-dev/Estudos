
const express = require("express");
const app = express();
const morgan = require("morgan")


const rotaProdutos = require("./routes/produtos");
const rotaPedidos = require("./routes/pedidos");

app.use(morgan('dev'))
app.use(express.json())
//rotas
app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos)

app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Origin', '*') // configura cors para todos os dominios
  req.header(
    'Access-Controll-Allow-Header',
    'Origin, X-Request-With, Content-Type, Accept, Authorization'
    )

    if(req.method === 'OPTIONS'){
        res.header('Acces-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET')
        return res.status(100).send({})
    }
  next()
})

// Quando a rota não é encontrada
app.use((req, res, next)=>{
  const erro = new Error("Rota não encontrada");
  erro.status=404;
  next(erro);
});
// outros erros
app.use((error, req, res, next)=>{
 res.status(error.status || 500);
 return res.send({
  erro:{
    mensagem: error.message
  }
 });
});

module.exports = app;