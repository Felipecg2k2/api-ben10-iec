# Ben 10 API

API RESTful desenvolvida para um catálogo de aliens do universo **Ben 10**.

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- Sequelize
- PostgreSQL
- Swagger / OpenAPI
- CORS
- dotenv
- pnpm

## Estrutura do projeto

```text
api-ben10/
├── src/
│   ├── config/
│   │   ├── database.ts
│   │   └── swagger.ts
│   ├── controllers/
│   │   └── alien.controller.ts
│   ├── models/
│   │   └── alien.model.ts
│   ├── routes/
│   │   └── alien.routes.ts
│   └── server.ts
├── .env
├── .env.example
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

## Entidade

A API possui a entidade `Alien`, com os seguintes atributos:

| Campo                | Tipo     | Descrição                             |
| -------------------- | -------- | ------------------------------------- |
| `id`                 | integer  | Identificador único                   |
| `nome`               | string   | Nome do alien                         |
| `especie`            | string   | Espécie do alien                      |
| `planeta`            | string   | Planeta de origem                     |
| `poderPrincipal`     | string   | Principal poder do alien              |
| `nivelPoder`         | integer  | Nível de poder de 1 a 10              |
| `disponivelOmnitrix` | boolean  | Indica se está disponível no Omnitrix |
| `createdAt`          | datetime | Data de criação                       |
| `updatedAt`          | datetime | Data da última atualização            |

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- pnpm
- PostgreSQL

O projeto utiliza:

```text
pnpm 12.8.1
Node.js
PostgreSQL
```

## Configuração do banco de dados

Crie um banco de dados PostgreSQL chamado:

```text
ben10
```

Depois, configure as variáveis de ambiente.

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ben10
DB_USER=postgres
DB_PASSWORD=sua_senha
PORT=3000
```

Para facilitar a configuração, o projeto possui também o arquivo `.env.example`.

## Instalação

Clone o repositório e entre na pasta do projeto:

```bash
cd api-ben10
```

Instale as dependências:

```bash
pnpm install
```

## Executando em desenvolvimento

Para iniciar a aplicação em modo de desenvolvimento:

```bash
pnpm dev
```

O servidor será iniciado em:

```text
http://localhost:3000
```

## Executando a versão compilada

Para compilar o projeto:

```bash
pnpm build
```

Depois, execute:

```bash
pnpm start
```

## Swagger

A documentação interativa da API está disponível em:

```text
http://localhost:3000/api-docs
```

Por meio do Swagger é possível visualizar e testar todas as operações da API.

## Endpoints

### Listar aliens

```http
GET /aliens
```

Retorna todos os aliens cadastrados.

### Buscar alien por ID

```http
GET /aliens/:id
```

Exemplo:

```http
GET /aliens/1
```

### Cadastrar alien

```http
POST /aliens
```

Exemplo de corpo:

```json
{
  "nome": "XLR8",
  "especie": "Kineceleran",
  "planeta": "Kinet",
  "poderPrincipal": "Super velocidade",
  "nivelPoder": 9,
  "disponivelOmnitrix": true
}
```

### Atualizar alien

```http
PUT /aliens/:id
```

Exemplo:

```http
PUT /aliens/1
```

Corpo:

```json
{
  "nome": "XLR8",
  "especie": "Kineceleran",
  "planeta": "Kinet",
  "poderPrincipal": "Super velocidade extrema",
  "nivelPoder": 10,
  "disponivelOmnitrix": true
}
```

### Excluir alien

```http
DELETE /aliens/:id
```

Exemplo:

```http
DELETE /aliens/1
```

## Status HTTP utilizados

| Status | Utilização                     |
| ------ | ------------------------------ |
| `200`  | Operação realizada com sucesso |
| `201`  | Recurso criado com sucesso     |
| `204`  | Recurso excluído com sucesso   |
| `400`  | Dados inválidos                |
| `404`  | Recurso não encontrado         |
| `500`  | Erro interno do servidor       |

## Validações

A API possui validações para os dados recebidos.

O campo `nivelPoder`, por exemplo, deve ser um número inteiro entre `1` e `10`.

Exemplo de requisição inválida:

```json
{
  "nome": "XLR8",
  "especie": "Kineceleran",
  "planeta": "Kinet",
  "poderPrincipal": "Super velocidade",
  "nivelPoder": 15,
  "disponivelOmnitrix": true
}
```

Resposta:

```json
{
  "mensagem": "O nivelPoder deve ser um número inteiro entre 1 e 10."
}
```

A API também verifica campos obrigatórios e os tipos dos dados enviados.

## CORS

O projeto possui CORS habilitado para permitir requisições de diferentes origens.

## Persistência

Os dados são armazenados em um banco de dados PostgreSQL utilizando o Sequelize como ORM.

As tabelas necessárias são sincronizadas automaticamente pelo Sequelize ao iniciar a aplicação.

## Scripts disponíveis

```bash
pnpm dev
```

Inicia a aplicação em modo de desenvolvimento.

```bash
pnpm build
```

Compila o TypeScript para JavaScript na pasta `dist`.

```bash
pnpm start
```

Executa a versão compilada da aplicação.

## Testes realizados

Durante o desenvolvimento foram testadas as operações:

- Cadastro de alien com dados válidos
- Cadastro com dados inválidos
- Listagem de aliens
- Busca de alien por ID
- Atualização de alien
- Exclusão de alien
- Persistência dos dados no PostgreSQL
- Documentação e execução dos endpoints pelo Swagger

## Autor

Projeto desenvolvido como atividade individual de Laboratório de Desenvolvimento Web.
