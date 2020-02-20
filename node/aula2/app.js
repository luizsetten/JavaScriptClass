const Cachorro = require('./Z/mod2');

const cachorrihno = new Cachorro('Dog');
cachorrihno.latir();

// console.log(__filename);
// console.log(__dirname);


const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));