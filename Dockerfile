FROM kkarczmarczyk/node-yarn

ADD . /express-typescript-starter

WORKDIR /express-typescript-starter

EXPOSE 8080:8080

CMD yarn start
