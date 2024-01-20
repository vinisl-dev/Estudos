const textarea = document.querySelector("#textarea")
const btnGravar = document.querySelector("#btnGravar")
const btnParar = document.querySelector("#btnParar")
const btnBaixar = document.querySelector("#btnBaixar")
const btnLimpar = document.querySelector("#btnLimpar")

class speechAPI {

  constructor(){
    const SpeechToText = window.SpeechRecognition || window.webkitSpeechRecognition
    this.speechAPI = new SpeechToText()
    this.output = textarea.output
    this.speechAPI.continuous = true
    this.speechAPI.lang = "pt-BR"

    this.speechAPI.onresult = (e) =>{
      var resultIndex = e.resultIndex
      var transcript = e.results[resultIndex][0].transcript
      textarea.value += transcript
    }
  }
  start() {
    this.speechAPI.start()
  }
  stop() {
    this.speechAPI.stop() 
  }
}

var speech = new speechAPI()

btnGravar.addEventListener("click", e =>{
  btnGravar.disabled = true
  btnParar.disabled = false
  btnBaixar.disabled = true
  speech.start()
})

btnParar.addEventListener("click", ()=>{
  btnGravar.disabled =false
  btnBaixar.disabled = false
  speech.stop()
})

btnBaixar.addEventListener("click", () =>{
  var text = textarea.value
  var filename = "speech.txt"
  download(text,filename)
})

function download(text, filename){
  var element = document.createElement('a')
  element.setAttribute('href','data:text/plaincharset=utf-8,' + encodeURIComponent(text))
  element.setAttribute('download', filename)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

btnLimpar.addEventListener("click", () =>{
  textarea.value=""
  btnGravar.disabled=false
  btnParar.disabled=true
  btnBaixar.disabled = true
  speech.stop()
})