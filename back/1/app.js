const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

app.get('/si', (req, res) => {
    res.send('no');
});

app.listen(port, () => {
    console.log(`Escuchando mediante http://localhost:${port}`)
});
