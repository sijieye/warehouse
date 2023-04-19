FROM node:17-alpine as builder
WORKDIR /app
COPY **/package.json **/package-lock.json ./
RUN NODE_ENV=development npm i
COPY . .
RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]


