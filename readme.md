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
- Docker
- Docker Compose
- ESLint
- Prettier
- Husky
- GitHub Actions

## Execução com Docker

Para iniciar a API e o PostgreSQL:
docker compose up -d

Verificar os containers:
docker compose ps

A API estará disponível em:
http://localhost:3000

Swagger:
http://localhost:3000/api-docs

Para parar os containers:
docker compose down

Qualidade de código
O projeto utiliza ESLint, Prettier e TypeScript:
pnpm lint
pnpm format
pnpm type-check
pnpm build

Husky
O Husky executa automaticamente no pre-commit:
pnpm lint
pnpm type-check
pnpm build

Commits com erros de lint, tipagem ou build são bloqueados.
GitHub Actions
A cada push, o workflow executa automaticamente:
- Instalação das dependências
- Lint
- Type check
- Build

Endpoints
GET    /aliens
GET    /aliens/:id
POST   /aliens
PUT    /aliens/:id
DELETE /aliens/:id

