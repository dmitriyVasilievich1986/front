FROM python:3.9

LABEL author="dmitriyvasil@gmail.com"

ENV HOST="0.0.0.0"
ENV DEBUG=True
ENV PORT=8200

RUN mkdir /app
WORKDIR /app

COPY . /app
RUN pip install -r requirements.txt

CMD python app.py