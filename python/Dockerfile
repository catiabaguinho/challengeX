# syntax=docker/dockerfile:1

FROM centos/python-36-centos7
USER root
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN yum -y install python-devel postgresql-client
RUN pip install -r requirements.txt
COPY ./code /code/

