FROM mcr.microsoft.com/azure-functions/node:4-node18 as builder
WORKDIR /wwwroot/app
COPY package.json .
COPY package-lock.json .
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /wwwroot/app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]


