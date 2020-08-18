const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/', (req, res) => {
    const user = {
        name: 'John',
        lastName: 'Doe'
    }
    res.send(user);
});

app.post('/profiles', (req,res) => {
    console.log(req.body);
    const user = {
        name: 'John2',
        lastName: 'Doe2'
    }
    res.send(user);
});

app.listen(3000);