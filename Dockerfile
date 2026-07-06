FROM node:24-alpine3.23 AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

ARG PUBLIC_VYOMAR_API_URL
ARG PUBLIC_BRAND_CHANNEL
ENV PUBLIC_VYOMAR_API_URL=$PUBLIC_VYOMAR_API_URL
ENV PUBLIC_BRAND_CHANNEL=$PUBLIC_BRAND_CHANNEL

RUN npm run build

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 4323
