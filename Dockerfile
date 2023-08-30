# Development stage
FROM node:18 as builder

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Production stage
FROM node:18-slim

RUN apt-get update && apt-get install -y openssl

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/prisma ./prisma

RUN yarn install --frozen-lockfile --production

EXPOSE 3000

CMD ["bash", "-c", "yarn db:generate && yarn db:migrate && node build/index.js"]
