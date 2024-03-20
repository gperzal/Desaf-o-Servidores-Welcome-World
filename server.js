const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware para parsear el body de los requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));


// Cambiamos la ruta raiz para todos los archivos queden en la carpeta files
const filesDir = path.join(__dirname, 'public', 'files');
if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir, { recursive: true });
}



function obtenerFechaConFormato() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString().padStart(2, '0'); // Añade un cero si es necesario
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // getMonth() devuelve un índice basado en cero, por lo tanto sumamos 1
    const anio = fechaActual.getFullYear();
    return `${dia}/${mes}/${anio}`;
}


app.get('/crear', (req, res) => {
    const { archivo, contenido } = req.query;
    const fechaConFormato = obtenerFechaConFormato(); // Obtenemos la fecha con el formato deseado
    const contenidoConFecha = `${fechaConFormato}\n${contenido}`; // Añadimos la fecha al inicio del contenido

    // fs.writeFile(path.join(__dirname, archivo + '.txt'), contenido, (err) => {
    fs.writeFile(path.join(filesDir, archivo + '.txt'), contenidoConFecha, (err) => {
        if (err) {
            return res.send('Error al crear el archivo');
        }
        res.send('Archivo creado exitosamente');
    });
});


app.get('/leer', (req, res) => {
    const { archivo } = req.query;
    // fs.readFile(path.join(__dirname, archivo), 'utf8', (err, data) => {
    fs.readFile(path.join(filesDir, archivo + '.txt'), 'utf8', (err, data) => {
        if (err) {
            return res.send('Error al leer el archivo');
        }
        res.send(data);
    });
});

app.get('/renombrar', (req, res) => {
    const { nombre, nuevoNombre } = req.query;
    // fs.rename(path.join(__dirname, nombre + '.txt'), path.join(__dirname, nuevoNombre + '.txt'), (err) => {
    fs.rename(path.join(filesDir, nombre + '.txt'), path.join(filesDir, nuevoNombre + '.txt'), (err) => {
        if (err) {
            return res.send('Error al renombrar el archivo');
        }
        res.send(`Archivo renombrado de ${nombre} a ${nuevoNombre}`);
    });
});


app.get('/eliminar', (req, res) => {
    const { archivo } = req.query;
    // fs.unlink(path.join(__dirname, archivo), (err) => {
    fs.unlink(path.join(filesDir, archivo + '.txt'), (err) => {
        if (err) {
            return res.send('Error al eliminar el archivo');
        }
        res.send('Archivo eliminado exitosamente');
    });
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
