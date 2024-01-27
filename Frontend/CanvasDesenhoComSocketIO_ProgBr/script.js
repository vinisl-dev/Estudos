document.addEventListener("DOMContentLoaded", ()=>{
  const pencil = {
      active:false,
      isMoving:false,
      pos:{x:0,y:0},
      posBefore:null,
  }
  const screenPaint = document.querySelector("#tela")
  screenPaint.width = 700
  screenPaint.height = 500;
  
  const context = screenPaint.getContext('2d')
  context.lineWidth = 1;
  context.strokeStyle="blackgray"

  const drawLine= (line)=>{

  context.beginPath();
  context.moveTo(line.posBefore.x, line.posBefore.y);
  context.lineTo(line.pos.x, line.pos.y);
  context.stroke();

  }

  screenPaint.onmousedown = (e)=>{pencil.active=true}
  screenPaint.onmouseup = (e)=>{pencil.active=false}
  screenPaint.onmousemove = (e) =>{ 
      pencil.pos.x = e.clientX
      pencil.pos.y = e.clientY
      pencil.isMoving = true
   }

   const cycle = ()=>{
    if(pencil.active && pencil.isMoving && pencil.posBefore){
      drawLine({pos:pencil.pos, posBefore:pencil.posBefore})
      pencil.isMoving = false
    }
    pencil.posBefore = {x:pencil.pos.x, y:pencil.pos.y}
    console.log(pencil)
  setTimeout(cycle,1);
  }

  cycle();
})