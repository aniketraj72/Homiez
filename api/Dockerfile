FROM node:20.10.0

ADD . /api/

WORKDIR /api

ENV PATH /api/node_modules/.bin:$PATH
ENV NODE_PATH /api/node_modules
VOLUME $NODE_PATH

COPY package.json /api/package.json

# Install nodemon globally
RUN npm install -g nodemon

# COPY package.json .
RUN npm install

# COPY . .

EXPOSE 3000

CMD ["npm", "run","dev"]
