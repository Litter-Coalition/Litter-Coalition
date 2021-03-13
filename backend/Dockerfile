# FROM python:3.7-alpine
FROM python:3
WORKDIR /code
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
EXPOSE 5000
COPY . .
# RUN apk add --no-cache \
#         libressl-dev \
#         musl-dev \
#         libffi-dev && \
#     pip install --no-cache-dir cryptography==2.1.4 && \
#     apk del \
#         libressl-dev \
#         musl-dev \
#         libffi-dev
RUN pip install -r requirements.txt
CMD ["flask", "run"]