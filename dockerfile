from node:24-alpine

WORKDIR /app

copy package*.json ./
run npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]