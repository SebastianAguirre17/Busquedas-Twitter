var express = require('express');
var router = express.Router();
var Twit = require('twit');
 
var T = new Twit({
    consumer_key: 'R5dqmwj39qDKLuPaibVoPhwpu',
    consumer_secret: 'hgapGawwxUvyGRXkKeuxIj6k0RplJyBfsLgP7LsSnlDNYPFGte',    
    access_token: '1549041253-SKzrdJO1SX5ventqvdDm6mD6ccQWDlbJIKkvCwW',         
    access_token_secret: 'iPyJV0nndSeYhL97c0fS3OuEww7Omy1IrA3YBAElNQbJx'
})

router.get('/', function(req, res, next) {
    let terminoDeBusqueda = 'rojo';

    T.get('search/tweets', { q: terminoDeBusqueda, count: 10 }, function(err, data, response) {
        res.send(data.statuses);
    })
});

module.exports = router;


