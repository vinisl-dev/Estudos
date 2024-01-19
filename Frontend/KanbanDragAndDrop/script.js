const columns = document.querySelectorAll(".column") // pega a referencia para todos os elemento com classe column

// adiciona um evento para observar o evento do tipo dragstart aos elementos
document.addEventListener("dragstart", (e) => { //observa o evento to dipo drag start(iniciar o arrasto)
  e.target.classList.add("dragging"); // adiciona uma classe dragging aos elementos que iniciaram drag start
  })

document.addEventListener("dragend", (e) => { // observa o evento dragend (fim de arrasto)
  e.target.classList.remove("dragging") // remove a classe dragging do elemento solto/arrastafdo
})

columns.forEach((item) => {  // laço que percorre todas as classe column, e todos os elementos contidos nelas
  item.addEventListener("dragover",(e)=>{ // adiciona um evento do tipo dragover (arrasto sobre/ se esta encima de algo)
    const dragging = document.querySelector(".dragging") // captura a referenciado elemento que esta sendo arrastado
    const applyAfter = getNewPosition(item, e.clientY); // chama a função que define a nova posição do item no card

    if(applyAfter) {                                        // verifica se applyAfter esta depois do elemento
      applyAfter.insertAdjacentElement("afterend", dragging)// se sim insere-o depois do elemento
    } else {
      item.prepend(dragging) // se não insere antes
    }
  })
})

function getNewPosition(item, posY){
  const cards = item.querySelectorAll(".item:not(.dragging)")// seleciona todos os elemento que não possuem a classe dragging
  let result

  for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect(); // getBoundingClientRect retorna um objeto DOMRect fornecendo o tamanho e a posição relativa do elemento na viewport/ tela do navegador
    const boxCenterY = box.y + box.height / 2 ; // identifica o centro vertical do elemneto
    if(posY >= boxCenterY) result = refer_card; 
  }
  return result
}