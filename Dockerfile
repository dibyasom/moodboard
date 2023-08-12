# The premix
FROM node:20-buster

COPY package.json .

RUN npm i

COPY . .

CMD ["npm", "start"]