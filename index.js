import express from 'express';
const app = express();


app.use((req, res, next) => {
    console.log(req.method);
    next();
});

app.get('/', (req, res) => {
    res.json({
        message: "Bienvenidos a mi API REST"
    });
});

import errores from './src/middlewares/not-found.js';
app.use(errores);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});