# Servidor de Archivos con Express

Este proyecto implementa un servidor básico usando Express.js para manejar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en archivos almacenados en el servidor. La interfaz de usuario para interactuar con el servidor se proporciona a través de un formulario HTML.

## Características

- **Crear archivos**: Los usuarios pueden crear archivos con contenido personalizado, incluyendo la fecha actual al inicio del archivo.
- **Leer archivos**: Los usuarios pueden leer el contenido de los archivos existentes en el servidor.
- **Renombrar archivos**: Los usuarios pueden cambiar el nombre de los archivos existentes.
- **Eliminar archivos**: Los usuarios pueden eliminar archivos del servidor.

## Despliegue

La aplicación está desplegada y accesible en el siguiente enlace: [Servidor de Archivos - Desafío Servidores Welcome World](https://desafio-servidores-welcome-world.onrender.com)

Puedes acceder a la aplicación para interactuar con las funcionalidades de crear, leer, renombrar y eliminar archivos directamente desde tu navegador.

## Requisitos Previos

Para ejecutar este proyecto localmente, necesitarás tener Node.js y npm instalados en tu sistema. Puedes descargarlos e instalarlos desde [nodejs.org](https://nodejs.org/).

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:

1. Clona el repositorio en tu máquina local:

    ```bash
    git clone [URL_DEL_REPOSITORIO]
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd [NOMBRE_DEL_DIRECTORIO]
    ```

3. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

4. Inicia el servidor:

    ```bash
    npm start
    ```

    O, si prefieres:

    ```bash
    node server.js
    ```

5. Abre un navegador y ve a `http://localhost:3000/index.html` para acceder a la interfaz de usuario.

## Uso

El proyecto viene con una interfaz de usuario simple que te permite realizar todas las operaciones soportadas:

- Para **crear** un archivo, completa el nombre del archivo y el contenido, y haz clic en "Crear archivo".
- Para **leer** un archivo, introduce el nombre del archivo que deseas leer y haz clic en "Consultar archivo".
- Para **renombrar** un archivo, escribe el nombre actual del archivo y el nuevo nombre, y luego haz clic en "Renombrar archivo".
- Para **eliminar** un archivo, simplemente ingresa el nombre del archivo que deseas eliminar y haz clic en "Eliminar archivo".

