FROM node:16.13.2-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 80
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "80"]