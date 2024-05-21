import express from 'express'
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express on Lambda prueba!');
});

app.listen(3000, () =>{
    'server on port 3000'
})

