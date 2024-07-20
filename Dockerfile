# Development stage
FROM node:20 as builder

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

# Production stage
FROM node:20-slim

RUN apt-get update && apt-get install -y openssl

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/prisma ./prisma

RUN yarn install --production

EXPOSE 3000

CMD ["bash", "-c", "yarn db:generate && yarn db:migrate && node build/index.js"]
