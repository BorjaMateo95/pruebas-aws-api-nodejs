const express = require("express");
const app = express();
app.listen(3000, () => {
    console.log("El servidor está corriendo en AWS EC2 en el puerto 3000");
});

app.get('/hola', function (req, res) {
    res.send('Saludos desde AWS EC2');
});