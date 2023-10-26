FROM node:18-alpine

WORKDIR /meetup-FE-oct23/

COPY public/ /meetup-FE-oct23/public
COPY src/ /meetup-FE-oct23/src
COPY package.json /meetup-FE-oct23/
COPY tailwind.config.js /meetup-FE-oct23/

RUN npm install

CMD ["npm", "start"]
