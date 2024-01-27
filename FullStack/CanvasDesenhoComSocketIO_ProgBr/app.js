const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)

app.use(express.static(__dirname + "/public"))
const socketio = require("socket.io")

const io = socketio(server);
let history=[]


io.on('connection', (socket) =>{
  console.log(`Connection Id: ${socket.id}`)

  history.forEach(line => socket.emit('draw', line)) //socket conexao individual
  socket.on('clear', () => {
    history = new Array()
    io.emit('draw') // todas as conexões
  })


  socket.on('draw', (line) => {
    history.push(line)
    io.emit('draw', line)
})

  

})

server.listen(3000, () => {console.log("running")})