const express = require('express');
const hbs = require('hbs');
require("dotenv").config();

const app = express();
const port = process.env.PORT;

//Handlebar
app.set("view engine","hbs");
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estatico
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render('home', {
        nombre: "Claudio Rodolfo Garcete",
        titulo: "Drako Gym"
    });
})

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: "Claudio Rodolfo Garcete",
        titulo: "Drako Gym"
    });
})

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: "Claudio Rodolfo Garcete",
        titulo: "Drako Gym"
    });
})

// app.get('/index', function (req, res) {
//     res.sendFile(__dirname + '/public/index.html');
// })

// app.get('/generic', function (req, res) {
//     res.sendFile(__dirname + '/public/generic.html');
// })

// app.get('/elements', function (req, res) {
//     res.sendFile(__dirname + '/public/elements.html');
// })

// app.get('/hola-mundo', function (req, res) {
//     res.send('hola mundo desde su respectiva ruta');
// })


app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, ()=> {
    console.log(`App listening at http://localhost:${port}`);
})