const path = require('path');
const axios = require('axios');
const mod1 = require('./mod1');

axios('https://www.google.com.br')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));