const tecnologias = ["java", "react", "node", "python", "php"];
// faz uso dos metodos da classe Math, para gerar um numero randomico, ".random()", 
//limitado ao numero de intens do array, "tecnologias.length", arrendonando para o menor numero inteiro, "floor"
const palavraSecreta = tecnologias[Math.floor(Math.random() * tecnologias.length)];
// console.log(palavraSecreta)

const letrasErradas = [] // arrary vazio para armazenar as letras erradas
const letrasCorretas = [] // array vazio para armazenar as letras corretas

document.addEventListener("keydown", (evento) =>{ //adiciona o evento de escuta para as teclas pressionadas do teclado a todo o documento HTML

    const codigo = evento.keyCode

    if (isLetra(codigo)){ // verifica se é uma letra uma letra maiuscula de A a Z;
      const letra = evento.key; // se for captura a tecla digitada
    if (letrasErradas.includes(letra)) { // verifica se o array letrasErradas ja contem a letra digitada, se sim executa a função abaixo
      mostrarAvisoletraRepetida()
    } else{ // se a letra não estiver dentro do array executa o que esta abaixo
      if (palavraSecreta.includes(letra)) {// verifica se a palavra secreta possui a letra digitada
        letrasCorretas.push(letra) // inclui a letra no array de letras corretas
        
    }else {
      letrasErradas.push(letra) // senão inclui no array de letras erradas
    }
    
    }
    atualizarJogo();  //função executada toda vez que alguma tecla é digitada
  }

});

function atualizarJogo() {
  mostrarLetrasErradas();
  mostrarLetrasCertas();
  desenharForca();
  checarJogo()
}

function mostrarLetrasErradas(){
  const div = document.querySelector(".letras-erradas-container"); // pega a referenciado elemento html
  div.innerHTML = "<h3>Letras erradas</h3>";  //adiciona um subelemento H3 ao elemento
  letrasErradas.forEach((letra)=>{  //percorre o array de letras erradas e para cada letra (elemento do array) adiciona um elemento span com a letra
    div.innerHTML +=`<span>${letra}</span>`
  })

}

function mostrarLetrasCertas() {
  const container = document.querySelector(".palavra-secreta-container"); // pega a referencia para o elemento html
  container.innerHTML=""; //atribui um conteudo vazio ao container
  palavraSecreta.split("").forEach((letra) => { //divide a string tranformando ela em um array, e em seguida percorre o array
    
    if(letrasCorretas.includes(letra)){
    container.innerHTML += `<span>${letra}</span>`; // adiciona uma <span> com cada letra do array ao elemento HTML container
  } else{ // caso não tenha a letra insere um,<span> com _ underscore
    container.innerHTML += `<pan>_</span>`
  }
})
}

function checarJogo(){
  let mensagem= "" //cria um variavel  de texto vazia
  const container = document.querySelector(".palavra-secreta-container");
  const partesCorpo = document.querySelectorAll(".forca-parte");

  if (letrasErradas.length === partesCorpo.length){
    mensagem="Fim de jogo!, Você perdeu"
  }

  if (palavraSecreta === container.innerText) {
    mensagem = "Parabéns, Voce ganhou!";
  }

  if (mensagem) {
    document.querySelector("#mensagem").innerHTML = mensagem;
    document.querySelector(".popup-container").style.display = "flex";
  }

}


function desenharForca() {
  const partesCorpo = document.querySelectorAll(".forca-parte"); // pega todos os elementos que com a classe forca-parte
  for (let i = 0; i < letrasErradas.length; i++){ // laço de repetição do tamanho do array de letras erradas
    partesCorpo[i].style.display = "block"; // altera o estilo do display do elemento, 
                                                    // retornado pelo array de elementos do querySelectorAll, 
                                                    // no indice i, para block, ao inves de none
  }

}


function mostrarAvisoletraRepetida(){
  const aviso = document.querySelector(".aviso-palavra-repetida"); // pega a referencia do elemento a DOM
  aviso.classList.add("show") //adiciona uma classe ao elemento pego
  setTimeout(()=>{ // cria um timer que será executado uma vez, durando 1 segundo
    aviso.classList.remove("show") // retira a classe do elemento HTML que anteriormente tinha sido adicionada
  },1000) // tempo de execução da função setTimout()
}

function isLetra(codigo) {
  return codigo >=65 && codigo <=90;
}

function reiniciarJogo() {
  window.location.reload();
}