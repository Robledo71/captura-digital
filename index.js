const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hola mundo desde Express!");
});

//Puerto
const PORT = 3001;

app.listen(PORT,() => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})