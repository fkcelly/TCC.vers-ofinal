Desbravadores App - Esqueleto inicial

Stack proposto (MVP):
- Frontend: Next.js (React) + TypeScript
- Backend: API usando rotas de API do Next / Node.js
- ORM: Prisma + PostgreSQL
- Realtime: Socket.IO (Redis para scaling)

Como começar localmente:
1) copiar `.env.example` para `.env` e ajustar variáveis
2) docker-compose up -d (inicia Postgres e Redis)
3) npm install
4) npx prisma migrate dev --name init
5) npm run dev

Arquivos criados: package.json, tsconfig.json, next.config.js, prisma/schema.prisma, docker-compose.yml, arquivos iniciais em `src/pages`.
