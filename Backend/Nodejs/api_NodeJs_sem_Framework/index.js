const http = require("http")
const {randomUUID} = require("crypto")

const users=[] // se o array ficar dentro da função server ele perde o valor a cada chamada

const server = http.createServer((req, res) =>{

  //funciona como rota default todo tipo de metodo se deixar assim  :!
  if(req.url === "/"){
    return res.end("online application")
  }

  if(req.url === "/users" || req.url.startsWith("/users")){

    if (req.method === 'GET'){
        // console.log(req.url)
        res.end(JSON.stringify(users))
        // console.log(users)     
    }  
  
    if(req.method === 'POST') { // retorna um buffer se não fizer a conversão com JSON.parse
      req.on("data", (chuck) => {
        const dataUser = JSON.parse(chuck)
        const user = {
          id: randomUUID(),
          ...dataUser
        }
        users.push(user)
      
      }).on("end", () =>{ // esse end funciona como um await, que espera a operação ser concluida
        return res.end(JSON.stringify(users))
      })
    }

    if (req.method === 'PUT') {
      const url = req.url
     //console.log(url)
      const splitURL = url.split("/")
      const idUser = splitURL[2] // posição 0 - retorna a url completa, 1- users e 2 - id
     // console.log(idUser)
      const userIndex = users.findIndex(user => user.id === idUser)
      req.on("data", (data)=>{
      const dataUser = JSON.parse(data)
      users[userIndex]= {
        id:idUser,
        ...dataUser
      }
      }).on("end", ()=>{
        return res.end(JSON.stringify(users))
      })
    }
    if(req.method === 'DELETE'){
       const url = req.url
       const splitURL = url.split("/")
       const idUser = splitURL[2]
       console.log(idUser)
      
       const indexUser = users.findIndex((user)=> user.id === idUser)
        users.splice(indexUser,1)
    
      return res.end(JSON.stringify(users))
    }
  }
})
server.listen(3000, ()=> { console.log("Server is running on port 3000") })