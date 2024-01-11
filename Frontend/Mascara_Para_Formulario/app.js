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
      .replace(/(\d{4})-(\d)(\d{4})/,'$1$2-$3') //muito boa
      .replace(/(-\d{4})\d+?$/,'$1')
  

  },

  phoneDDI(value) {
    return value
      .replace(/\D/g,'')
      .replace(/(\d{2})(\d)/,'+$1 $2')
      .replace(/(\d{2})(\d)/,'($1) $2')
      .replace(/(\d{4})(\d)/,'$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/,'$1$2-$3')
      .replace(/(-\d{4})\d+?$/,'$1')
  },

  cep(value){
    return value
      .replace(/\D/g,'')
      .replace(/(\d{5})(\d)/,'$1-$2')
      .replace(/(-\d{3})\d+?$/,'$1')
  },
  pis(value) {
    return value  
      .replace(/\D/g,'')
      .replace(/(\d{3})(\d)/,'$1.$2')
      .replace(/(\d{5})(\d)/,'$1.$2')
      .replace(/(\d{5}\.)(\d{2})(\d)/,'$1$2-$3')
      .replace(/(-\d)\d+?$/,'$1')
  },
  //essa aqui não tinha conseguido usar quando tentei em um projeto
  money(value){
    const cleanValue = +value.replace(/\D+/g,'');
    const options = { style: 'currency', currency:'BRL'};
    return new Intl.NumberFormat('pt-br', options).format(cleanValue/100); 
    
  },

  date(value) {
    return value
      .replace(/\D+/g,'')
      .replace(/(\d{2})(\d)/,'$1/$2')
      .replace(/(\d{2})(\d)/,'$1/$2')
      .replace(/(\/\d{4})\d+?$/,'$1');
  },
  dateWithDashes(value){
    return value  
      .replace(/\D+/g,'')
      .replace(/(\d{2})(\d)/,'$1-$2')
      .replace(/(\d{2})(\d)/,'$1-$2')
      .replace(/(-\d{4})\d+?$/,'$1')
  },
  hour(value){
    return value
      .replace(/\D+/g,'')
      .replace(/(\d{2})(\d)/,'$1:$2')
      .replace(/(:\d{2})\d+?$/,'$1')
  }



}


document.querySelectorAll('input').forEach((input)=>{
  // input.dataset pega as propriedade "data-js" do documento
  const field = input.dataset.js 
  input.addEventListener('input', (e)=>{
    e.target.value = masks[field](e.target.value)

  }, false)

});
