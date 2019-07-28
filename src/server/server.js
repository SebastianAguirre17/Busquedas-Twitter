var Twit = require('twit')

var T = new Twit({
    consumer_key:         'R5dqmwj39qDKLuPaibVoPhwpu',
    consumer_secret:      'hgapGawwxUvyGRXkKeuxIj6k0RplJyBfsLgP7LsSnlDNYPFGte',
    access_token:         '1549041253-SKzrdJO1SX5ventqvdDm6mD6ccQWDlbJIKkvCwW',
    access_token_secret:  'iPyJV0nndSeYhL97c0fS3OuEww7Omy1IrA3YBAElNQbJx'
})


T.get('search/tweets', { q: 'blue', count: 100 }, function(err, data, response) {
    console.log(data)
})
