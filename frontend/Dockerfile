FROM node:18-alpine as builder
WORKDIR /app
COPY ./frontend/package.json .
COPY ./frontend/package-lock.json .
RUN npm install --silent
COPY . .

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]


