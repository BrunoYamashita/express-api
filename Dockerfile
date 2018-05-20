FROM node:latest

RUN useradd --user-group --create-home --shell /bin/false app 

ENV HOME=/home/app

COPY package.json $HOME/test/

RUN chown -R app:app $HOME/*

USER app

WORKDIR $HOME/test

RUN npm cache clean && npm install --silent --progress=false

USER root

COPY . $HOME/tg

RUN chown -R app:app $HOME/*

USER root

CMD ["npm", "start"]