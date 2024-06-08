## Cria um container docker com postgres
docker run -p 5432:5432 -e POSTGRES_PASSWORD=1234 postgres

## configura um ambiente typescript com jest

npm init -y

npm install --save-dev typescript@5.1.6 ts-node@10.9.1 ts-jest@29.1.1 jest@29.6.2 @types/jest@29.5.3
npx tsc --init

cria um arquivo jest.config.ts na raiz do projeto

