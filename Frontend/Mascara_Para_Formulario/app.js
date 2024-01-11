const masks ={

  cpf (value){
    return value
      .replace(/\D/g, '') // não aceita a entrada de letras
      .replace(/(\d{3})(\d)/,'$1.$2')
      .replace(/(\d{3})(\d)/,'$1.$2')
      .replace(/(\d{3})(\d{1,2})/,'$1-$2')
      .replace(/(-\d{2})\d+?$/,'$1') // limita o campo ao tamanho da regex
  },

  cnpj(value){
    return value
      .replace(/\D/g,'')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/,'$1/$2')
      .replace(/(\d{4})(\d{1})/,'$1-$2')
      .replace(/(-\d{2})\d+?$/,'$1')
  },

  // muito legal porque a mascara é variavel conforme o numero de digitos
  phone(value){
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/,'($1) $2')
      .replace(/(\d{4})(\d)/,'$1-$2')
      .replace(/(\d{4,5})(-\d{4})\d+?$/,'$1')
  

  },

  phoneDDI(value) {
    return value
      .replace()
  },

  cep(value){
    return value
      .replace(/\D/g,'')
      .replace(/(\d{4})(\d)/,'$1-$2')
      .replace(/(-\d{3})\d+?$/,'$1')
  }
}


document.querySelectorAll('input').forEach((input)=>{
  // input.dataset pega as propriedade "data-js" do documento
  const field = input.dataset.js 
  input.addEventListener('input', (e)=>{
    e.target.value = masks[field](e.target.value)

  }, false)

});
