const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html")
})
app.get("/nome", function(req, res) {
    res.send("<h1>Hello " + req.params.nome + "</h1>")
})

app.listen(8081, function() {                                           
    console.log('Server tourne sur url http://localhost:8081')
}) //Derniere lige de code