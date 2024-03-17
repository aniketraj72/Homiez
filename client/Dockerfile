FROM node:20.10.0

ADD . /app/

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_PATH /app/node_modules
VOLUME $NODE_PATH

COPY package.json /app/package.json
RUN npm install --force

EXPOSE 5173

CMD ["npm","run","dev"]
