var express = require('express');
var https = require('https');
var fs = require('fs');

var app = express();

// Carrega os certificados SSL
var privateKey = fs.readFileSync('/etc/ssl/private/nodejs.key', 'utf8');
var certificate = fs.readFileSync('/etc/ssl/newcerts/nodejs.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

// Rota raiz
app.get('/', function (req, res) {
    res.send('Seu Nome e Sobrenome #BoraParaPrática!!!');
});

// Configuração do servidor HTTPS
var httpsServer = https.createServer(credentials, app);

// Inicia o servidor na porta 443 (padrão HTTPS)
httpsServer.listen(443, function() {
    console.log('Aplicativo de exemplo ouvindo na porta 443 (HTTPS)');
});
