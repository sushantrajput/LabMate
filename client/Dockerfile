# Build
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG VITE_BACKEND_URL=http://api.labmate.me
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm run build

# Production
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
