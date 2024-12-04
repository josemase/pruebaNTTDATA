Para poder realizar el consumo del API del back-end de manera independiente se usa el metodo GET con este endpoint:

http://localhost:8090/getCliente?TipoDocumento=c&NumeroDocumento=23445322 

El API no discrimina el tipo de documento por lo cual puede ser C(cedula) o P(pasaporte), en caso de ser necesario también se puede realizar esa validación, pero si únicamente devuelve una respuesta correcta o código 200 para el numero de documento 23445322, esto lo consume automáticamente la parte fron-end con los datos ingresados, por ende en el frond-end se debe rellenar de la siguiente manera:

Tipo documento: Cedula/Pasaporte //no se discrimina el tipo
Numero de documento:23445322 //únicamente devuelve una respuesta exitosa con ese id

En caso de ser un numero diferente, la API responderá error 404 y el front end mostrará una alerta con el mensaje de error.

Para el front end realizado con Angular el endpoint http://localhost:4200/ se ejecutará al ejecutar la parte front dentro de la carpeta fron end con el comando "ng serve -o", (tener en cuenta que el servicio del back-end debería estarse ejecutando para consumir el API que me trae los datos quemados, una opción ejecutar el jar)

Se comparte el jar el cual se puede ejecutar con el siguiente comando: "java -jar ppBackend-0.0.1-SNAPSHOT.jar", asegurarse de tener java instalado (únicamente para la parte back-end en el puerto 8090)

