FROM node:18-alpine
RUN npm i -g pnpm

WORKDIR /app-src

COPY package.json pnpm-lock.yaml ./
COPY src ./src
RUN pnpm install

USER node

CMD ["pnpm", "run", "start"]
