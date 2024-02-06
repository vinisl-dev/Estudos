const qr = require('qrcode');

let data = {
  id:10,
  name:"Usuario",
  email:"teste@email.com"
};

let strData = JSON.stringify(data)
qr.toString(strData, {type:'terminal'}, (err, code)=>{
  if(err) return console.log("error: ", err)

  console.log(code)
})

qr.toDataURL(strData,(err, code) =>{
  if(err) return console.log("error: ", err)

  console.log(code)
})
