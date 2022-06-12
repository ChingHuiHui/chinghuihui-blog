FROM node:lts-alpine as build-stage
WORKDIR /app

COPY package*.json ./
COPY ./yarn.lock .

RUN yarn install
RUN yarn build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/.output .

EXPOSE 3000 
ENTRYPOINT ["node", ".output/server/index.mjs"]