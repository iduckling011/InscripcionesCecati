# Instrucciones

1. Crea un repositorio en GitHub y sube esta carpeta.
2. En Render, crea un nuevo Web Service conectando tu repositorio.
3. En las variables de entorno de Render, agrega:

    KEY: MONGO_URI
    VALUE: tu URL de conexión de MongoDB Atlas

4. Render se encargará de instalar dependencias y correr `node server.js`.
