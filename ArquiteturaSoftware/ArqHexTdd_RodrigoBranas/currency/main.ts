import express from "express"
const app = express()
app.get("/currencies",(req, res)=>{
  res.json({
    usd:3 //* Math.random()
  })
})

app.listen(3001)