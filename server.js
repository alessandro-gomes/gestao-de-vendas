var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var url = require('url');

app.use(express.static('public'));
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

const list = { "list": [ 
    { id: 1, nome: "Alessandro" }
]};

app.get('/consulta', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   const resp = JSON.stringify(list);
   res.end(resp);
});

app.post('/register', function (req, res) {
   console.log(req.body);
   list.list.push(req.body);
   res.writeHead(200, {'Content-Type': 'application/json'});
   res.end('{ "msg": "Sucesso" }');
});

var server = app.listen(3000, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port);
});

