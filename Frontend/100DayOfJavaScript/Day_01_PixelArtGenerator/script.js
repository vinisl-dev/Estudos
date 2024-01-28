let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");


// cria um objeto com tipos de eventos para mouse e telas touchscreen
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup"
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
}

let deviceType =""; // variavel para determinar o tipo de dispositivo, touch | mouse

let draw = false;
let erase = false;

const isTouchDevice = ()=>{ 
  try{
  document.createEvent("TouchEvent") ;// great :) -  cria um listen para eventos o tipo touch
  deviceType = "touch";               // se esse evento não retorna um erro, atribui touch a deviceType
  return true;
} catch (e) {                         // se ocorrer um erro atribui mouse a deviceType 
  deviceType = "mouse";
  return false
}
};
isTouchDevice();                    //executa a função

gridButton.addEventListener("click", ()=>{
    container.innerHTML = "";
    let count = 0;
    for (let i=0; i < gridHeight.value; i++){ 
      count +=1;
   
      let div = document.createElement("div");
      div.classList.add("gridRow");

      for (let j=0; j < gridWidth.value; j++) {
        count += 1;
        let col = document.createElement("div");
        col.classList.add("gridCol");
        col.setAttribute("id", `gridCol${count}`);
        col.addEventListener(events[deviceType].down, () =>{
          draw = true;
          if (erase) {
            col.style.backgroundColor = "transparent";
          } else {
            col.style.backgroundColor = colorButton.value; // pega a cor do input color
          }
        });
        col.addEventListener(events[deviceType].move, (e)=>{
          let elementId = document.elementFromPoint(
            !isTouchDevice() ? e.clientX : e.touches[0].clientX,
            !isTouchDevice() ? e.clientY : e.touches[0].clientY,
          ).id;
          checker(elementId);
        });

        col.addEventListener(events[deviceType].up, ()=>{
          draw=false;
        })

        div.appendChild(col);
      }
      container.appendChild(div);
    }
});


function checker(elementId) {
  let gridColumns = document.querySelectorAll(".gridCol");
  gridColumns.forEach((element)=>{
    if(elementId == element.id){
      if(draw && !erase){
        element.style.backgroundColor = colorButton.value;
      }else if (draw && erase){
        element.style.backgroundColor = "transparent";
            }
    }
  }) 
}

clearGridButton.addEventListener("click", ()=>{
  container.innerHTML="";
});

eraseBtn.addEventListener("click", ()=>{
  erase=true;
});

paintBtn.addEventListener("click", ()=>{
  erase=false;
});

gridWidth.addEventListener("input", ()=>{
  widthValue.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
});

gridHeight.addEventListener("input", ()=>{
  heightValue.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
  console.log(gridHeight.value)
})

window.onload = ()=>{
  gridHeight.value=0;
  gridWidth.value=0;
}