#FROM node:10-alpine as build-step
FROM mhart/alpine-node:14
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build

EXPOSE 4200

CMD ["npm", "run", "start"]
