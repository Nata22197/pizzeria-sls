# IMPORTANTE

## NPM

Este repositorio  está pensado para utilizarse con el gestor de paquetes NPM.

## NECESARIO
- Debes instalar Serverless Framework

 `npm install -g serverless`

- [Documentación oficial Serveless](https://www.serverless.com/framework/docs)


## Ejemplos

Este proyecto posee una lambda con helloworld en JS

Para más detalles revisar:

- [Documentación oficial AWS Lambdas](https://docs.aws.amazon.com/lambda/index.html)

## Resources

La definición de los recursos necesarios para el servicio se deben alojar en la carpeta `resources/` (ej.: resources/functions), en un archivo formato `.yml`. La definición de los recursos debe adoptar la sintaxis de [AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html). Luego se debe importar el recurso, como elemento de un arreglo, en la sección `resources` de `serverless.yml`.

## Iniciar
 `npm run dev`
