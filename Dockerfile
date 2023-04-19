FROM node:18-alpine as builder
WORKDIR /home/site/wwwroot/app
ENV AzureWebJobsScriptRoot=/home/site/wwwroot
COPY package.json /home/site/wwwroot/app
COPY package-lock.json /home/site/wwwroot/app
RUN npm install --silent
COPY . /home/site/wwwroot/app
RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /home/site/wwwroot/app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]


