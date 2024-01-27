document.addEventListener("DOMContentLoaded", ()=>{

  const socket = io.connect();

  const pencil = {
      active:false,
      isMoving:false,
      pos:{x:0,y:0},
      posBefore:null,
  }
  const screenPaint = document.querySelector("#tela")
  screenPaint.width = 1000
  screenPaint.height = 600;
  
  const context = screenPaint.getContext('2d')
  context.lineWidth = 1;
  context.strokeStyle="blackgray"

  const drawLine = (line)=>{
    if(line){
  context.beginPath();
  context.moveTo(line.posBefore.x, line.posBefore.y);
  context.lineTo(line.pos.x, line.pos.y);
  context.stroke();
  } else {
    context.clearRect(0, 0, screenPaint.width, screenPaint.height)
  }
}

  screenPaint.onmousedown = (e)=>{pencil.active=true}
  screenPaint.onmouseup = (e)=>{pencil.active=false}
  screenPaint.onmousemove = (e) =>{ 
      pencil.pos.x = e.clientX
      pencil.pos.y = e.clientY
      pencil.isMoving = true
   }

  socket.on('draw', (line)=>{
    drawLine(line)
  })

   const cycle = ()=>{
    if(pencil.active && pencil.isMoving && pencil.posBefore){
      // drawLine({pos:pencil.pos, posBefore:pencil.posBefore})
      socket.emit('draw', {pos:pencil.pos, posBefore:pencil.posBefore})
      pencil.isMoving = false
    }
    pencil.posBefore = {x:pencil.pos.x, y:pencil.pos.y}
    // console.log(pencil)
  setTimeout(cycle,1);
  }

  cycle();

  document.body.addEventListener('keyup', e =>{
    if(e.keyCode === 32){
      socket.emit('clear')
    }
  })

})