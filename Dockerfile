FROM node:18-alpine as builder
WORKDIR /site/wwwroot/app
COPY package.json .
COPY package-lock.json .
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /site/wwwroot/app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]


