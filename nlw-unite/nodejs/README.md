# pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizdor cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

### Requisitos funcionais

- [] O organizador deve poder cadastrar dados de um evento;
- [] O organizador deve poder visualizar dados de um evento;
- [] O organizador deve poder visualizar a lista de participantes;
- [] O participante deve poder se inscrever em um evento;
- [] O participante deve poder visualizar seu crachá de inscrição
- [] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [] O participante só pode se inscrever em um evento uma única vez;
- [] O participante só pode se inscrever em eventos com vagas disponíveis;
- [] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não funcionais

- [] O check-in no evento será realizado através de um QRCode;


### Dependências
- node 20.11.0
- typescript -D
- @types/node -D
- tsx -D
- fastify
- prisma
- Sqlite
- zod 


### Setup 

  **npx tsc --init**
  acesse **https://github.com/tsconfig/bases**
    na pasta bases procure sua versão do node no redme e copie a configuração do tsconfig
        adicione essa linha ao tsconfig =>  **"include": ["src"]**
      **npx tsc**

    **npm i tsx -D**

    // executa em modo watch o arquivo principal
    **npx tsx watch src/server.ts**

    // para faciliar adicione a linha:  
      **"dev":  "tsx watch src/server.ts"**
      para usar variaveis de ambiente use algo como 
      **"dev": "tsx watch --env-file .env src/server.ts"**
      ao block scripts para facilitar a execução
    execute o comando 
    **npm run dev**

    **npm install fastify**

    **npm i prisma -D**
        npx prisma init --datasource-provider SQLite
        
        - Após criar o model no arquivo schema.prima rode o comando abaixo
        **npx prisma migrate dev** // cria o tabela e migrations

      npx prisma studio // utilitario para manipula banco de dados
      
    npm i zod
## informações uteis
  - metodos http são apena semanticos, na pratica poderia utilizar um unico tipo de requisição para exeutar qualquer comportamento

  - Corpo da requisi (Request Body)
  - Parâmetros de busca (Search Params / Query Params) 'http://localhost:3333/users?name=Teste'
  - Parâmetros de rota (Route Params) Identifica o recurso 'DELETE http://localhost:3333/users/1'
  //Cabeçalho (Headers) -> Contexto






