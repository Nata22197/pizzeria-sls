# IMPORTANTE

## NPM

Este repositorio  está pensado para utilizarse con el gestor de paquetes NPM.

## NECESARIO
- Debes instalar Serverless Framework

`npm install -g serverless`

- [Documentación oficial Serverless](https://www.serverless.com/framework/docs)

- Instalar Docker

- [Documentación oficial Docker](https://www.docker.com/products/docker-desktop/)

- Instalar Postman

- [Documentación oficial Postman](https://www.postman.com/downloads/)

## Ejemplos

Este proyecto posee un ABM de ordenes con Lamdbas y DynamoDB

Para más detalles revisar:

- [Documentación oficial AWS Lambdas](https://docs.aws.amazon.com/lambda/index.html)

- [Documentación oficial AWS DynamoDB](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html)

## Resources

La definición de los recursos necesarios para el servicio se deben alojar en la carpeta `resources/` (ej.: resources/functions), en un archivo formato `.yml`. La definición de los recursos debe adoptar la sintaxis de [AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html). Luego se debe importar el recurso, como elemento de un arreglo, en la sección `resources` de `serverless.yml`.

## Iniciar Proyecto

- Iniciar Docker

- Instalar todas las dependencias del proyecto

 `npm install`

- Correr el comando para iniciar la APP

 `npm run dev`