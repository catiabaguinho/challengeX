# syntax=docker/dockerfile:1
FROM centos/python-36-centos7
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY file.txt /code/
COPY . /code/

