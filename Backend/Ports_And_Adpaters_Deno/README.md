
### Definiçoes e compreenções gerais do projeto

Este projeto foi o primeiro a me trazer de encontro com a compreensão do funcionamento relativo a arquitetura Hexagonal / Ports And Adapters, que em parte ja tinha compreensão mas não sabia como aplica-lo.

### Comandos:

deno task dev



### Fontes: ###
https://www.youtube.com/watch?v=XA6J9GM1TCQ&list=PLdPPE0hUkt0rYYNLRvRW0C83ADO_BM2nF&index=12&t=19s
https://github.com/cod3rcursos/arq-hexagonal-simplificada

##### adapters ####

  **adapters/ColecaoUsuarioMemoria**

  - Implementa a interface *ColecaoUsuario* fazendo usado da interface usuario, entidade modelo para esse tipo de dado;

  - Cria uma coleção/array usuarios somente leitura do tipo Usuario vazio que não pode ser alterdo fora da classe, apenas no contrutor ou na classe;

    - **adicionar**: método assincrono que recebe como parametro uma variavel usuario do tipo Usuario retorna uma promise do tipo void, após acidionar ao array usuarios o usuario passado como parametro para o método;

    - **buscarPorEmail**: método assincrono que recebe como parametro uma variavel email do tipo string, retornando uma promise com tipo condicional Usuario ou nulo, dependo do resuldado da operação
       - internamente a função/método realiza uma busca com o metodo *find* no array usuarios retornando o  primeiro elemeto em que o email sejam iguial ao passado como paramentro para função, caso não encontre nenhum retorna null;
    
**adapters/RealCripto**
  
  - Faz uso de uma tecnologia externa por meio da importação da biblioteca bcrypt

  - Implementa a interface **ProvedorCripto**, que funciona como *porta(ports)* para comunicação com o núcleo da aplicação, na camada de service(casos de uso), responsavel pelas regras de negocio da aplicação;

    - **criptografar**: Método que recebe uma string senha como parametro, retornando uma promise o tpo string, por meio do retorno recebido internamente pela chamada da funçao **bcrypt.hash()**, que rece a string passada como paramentro na função criptografar;

    - **comparar**: Método que recebe 2 paramentro do tipo string senha e senhaCripto, retornando um promise boleana;
      - internamente a função recebe a senha em descriptografada no 1º parametro, uma senha criptografada no segundo(hash), efetuando a comparação entre as duas e devolvendo como retorno verdadeiro(true) ou falso(false), que é repassado como retorno pela função comparar



#### core ####


- **core/shared/CasoDeUso**: É uma interface padrão para que as classe tenha uma definição padrão de entrada e saida
  - **executar** e a definição de um método padrão para execução de alguma função do sistema que tem como entra e saída os tipos IN e OUT, recebidos como padrão na definição da interface e são de qualquer tipo,(ainda não iniciei os estudos de Typescript, então isso é apenas uma inferencia baseada na experiência 😅😬)

- **core/model/ColeçãoUsuario** 
  - É uma interface que usa a interface Usuario denifida como padrão a ser seguido para as classes e metodo que farão uso deste tipo composto de dado
    -**metodos: **
      - Adicionar(): definção de um metodo que deve receber como parametro um usuario e retorna uma promise do tipo void;

      - BuscaPorEmail():definção de um metodo que deve receber como parametro uma string e retornar ua promise do tipo usuario ou null.


- **core/model/provedorCripto**
  Interface com as definiçõs/contrato com os metodos que deverão ser implementados pelas classe *adapdadoras* funcionando como *porta* para realizar as operações *criptografar e comparar*

    - **criptografar**: Recebe como parametro uma string senha e retorna uma Promise do tipo string;
    - **comparar**: Recebe 2 parametros uma senha do tipo string, senhaCript do tipo string ,retornado uma promise tipo boleano.

- **core/model/Usuario** 
    Interface com as definições padrões da *entidade Usuario*

- **core/service**
  - **LoginUsuario**:
    - Cria uma tipagem **LoginUsuarioEntrada** pra padronização dos dados;
    - Implementa CasoDeUso definido como tipo de entrada **LoginUsuarioEntrada**, e como tipo de retorno Usuario o nulo
    - cria construtor vazio, que recebe como parametro **um usuario** do tipo ProvedorCripto ambas interfaces de acesso ao adaptadores, acredito que aqui comece a injeção de depedências😅;

    - **executar**: implemetação do metodo da **interface CasodeUso**, recebendo como parametro um dto, do tipo LoginUsuarioEntrada, e retorna a promise do tipo Usuario ou null;
    - Internamente a função executar cria uma constante **usuario** que recebe o retorno da execução do metodo assincrono fuscarPorEmail, passado como paramentro no construtor, por isso o uso do this em "this.colecao.buscarPorEmail()", que recebe como parametro a string com a senhado usuario, por meio do dto.email, que é um atributo definido na definição da tipagem "LoginUsuarioEntrada";
    - na seguencia é feita uma verificação logica com o valor de *usuario*, que caso esteja vazio retornará **null** como retorno da função;
    - Em seguida é definida a consante saoIguais, que recebe o retorno da *** *definição da função*    **comparar** da *interface provedorCripto*, também passado no construtor da classe;
    com o valor deste retorno armazenado em **saoIguais**, realiza-se uma avaliação logica para verificar se o valor é verdeiro ou falso, se falso retornará um null;
    - Passando pelas duas avaliações e ambas sendo verdadeiras o método executar da classe LoginUsuario, retornará um objeto co mnome e email;


- **core/service**
  - **RegistrarUsuario**:
    -Importação da interfaces e entidades;

    - Declaração da classe RegistrarUsuario e implementação da interface 
    
    CasoDeUso modelo para o padrão de entrada e saida, que para este caso 
    receberá um usuario com todos os campos obrigatoriamente e retornará  void;

    - Declaração do construtor, com os parametros ;

    - implementação do método executar recebendo um usuario e retornando um promise vazia, void;

    - Declaração da constante senhaCripto, que recebe o retorno da definição do metodo assincrono criptografar de provedorCripto, recebendo como parametro uma string senha;

    - Declaração da constante usuarioCripto, que recebe um objeto contendo os dados do usuario(nome e email) e adiciona-se a senha ao objeto usando spread operator;

    - Por fim faz-se a chamada da *definição do método*  **adicionar** da interface **coleção** passada como parametro para o construtor da classe, passando como parametro **usuarioCripto**;

**index**
  - Importação da implementação dos adaptador **ColecaoUsuarioMemoria**, responsável pela perssistência dos dados;

  - Importação da implementação da classe de serviço/dominio **LoginUsuario** , reponsavel pelo processo de login do usuario;
  
  - Importação da implementação da classe de serviço/dominio **RegistrarUsuario** , reponsavel pela abstração do comportamento de cadastro de usuario;
  
  - Importação da implementação da classe de serviço/dominio **RealCripto** , reponsavel por abstrair o comportamento de autenticação/criptografia;

  - Instanciação das classes RealCripto() e ColecaoUsuarioMemoria();
  - Instanciação da classe RegistrarUsuario em **registrar**, passando como parametro para o construtor ColecaoUsuario e provedorCripto;
    - Chamada do método **executar**, passando um objeto com nome, email e senha;

   - Instanciação da classe LoginUsuarioem **login**, passando como parametro para o construtor ColecaoUsuario e provedorCripto;
    - Chamada do método **executar**, passando um objeto com nome e senha, armazenando seu retorno em **usuario**;
    - Finalmente 🥵, a exibição no console dos dados do usuario retorando pela execução do metodo executar de login;
    
   
