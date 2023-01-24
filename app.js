// Importación
const express = require('express')

// Definición de constantes
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mundo!')
})

app.get('/Kinal', (req, res) => {
    res.send('Hola a todos desde Kinal');
});

app.post('/registro', (req, res) => {
    res.send('Registro de una página web');
});

app.put('/login', (req, res) => {
    res.send('Bienvenido, inicia sesión');
});

app.delete('/delete', (req, res) => {
    res.send('Has borrado tu cuenta');
});

app.listen(port, () => {
  console.log(`Ejemplo de app escuchando en el puerto: ${port}`)
})