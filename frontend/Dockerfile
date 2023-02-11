FROM node:lts-buster-slim

WORKDIR /src

COPY src .

RUN npm install yarn && yarn

CMD ["yarn", "dev"]
