﻿# challengeX
# Project Challenge Data Engineer

Este proyecto provee un script para ingerir datos desde un servidor centos a una base de datos de postgres y  una API REST para obtener los registros de la base de datos.

## Description

Para la ingesta de datos se dearrollo un script en Python que lee el archivo .csv provisto para el challenge, luego  crea una tabla en la base de datos e inserta los datos en la tabla creada.

Para la obtención de los registros de la base de datos se creo una API Rest utilizando Express de Node.js

La solución fue creada sobre contenedores de Docker.

## Getting Started
### Dependencies

* Docker version 4.3.1
* Se utilizo Visual Studio Code para la edición del codigo fuente

### Installing

* Descargar el proyecto 
https://github.com/catiabaguinho/challengeX/archive/refs/heads/main.zip

* Descomprimirlo

* Editar  el archivo proyectoChallenge\docker-compose.yml para verificar los puerto a utilizar:
los valores por defecto son:
Postgresql  5432
Servidor Node 8080

### Executing program
* Ejecutar desde la terminal el archivo docker_compose.yml :
    docker-compose up

* Para ejecutar el API acceder la siguiente URL:
    http://localhost:8080/api/persons


## Authors

Catia Baguinho

## Version History

* 0.1

