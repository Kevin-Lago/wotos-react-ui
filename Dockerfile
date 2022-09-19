FROM node:18.8.0-alpine3.16
WORKDIR /app
COPY . .
RUN yarn install
ENV API_URL="test"
EXPOSE 3000