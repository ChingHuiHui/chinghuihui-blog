FROM node:lts as builder

WORKDIR /app

COPY . .

RUN yarn install 

RUN yarn build

RUN rm -rf node_modules && NODE_ENV=production yarn install 

FROM node:lts

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]
