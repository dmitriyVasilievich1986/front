FROM nodejscn/node:lts

LABEL author="dmitriyvasil@gmail.com"

ENV DEBUG=True
ENV PORT=8000

RUN mkdir /app
WORKDIR /app

COPY templates /app/templates
COPY ./package-lock.json /app
COPY ./package.json /app
COPY static /app/static
COPY ./app.js /app

RUN npm install

CMD node app.js