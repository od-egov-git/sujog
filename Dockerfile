FROM node:10-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
# COPY . /app
COPY src /app/src
COPY public /app/public
RUN chmod 777 /app
RUN touch /app/.eslintcache
RUN chmod 777 /app/.eslintcache

RUN npm run build
#CMD ['npm start']
# start app
CMD ["npm", "start"]
