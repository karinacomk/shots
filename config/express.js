var express = require('express')
    ,app = express();

// middleware
app.use(express.static('./app'));

// configuração de ambiente
app.set('port', 8080);

module.exports = app;
