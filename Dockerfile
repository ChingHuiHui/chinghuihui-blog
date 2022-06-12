FROM node:lts-alpine as build-stage
WORKDIR /app

COPY package*.json ./
COPY ./yarn.lock .

RUN yarn install
COPY . .
RUN yarn build

COPY ./.output .

EXPOSE 3000 
ENTRYPOINT ["node", ".output/server/index.mjs"]