const nome = 'Luiz';
const sobrenome = 'Setten';

const falaNome = () => nome + ' ' + sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquercoisa = 'O que eu quiser exportar';

module.exports = {
    nome, sobrenome, falaNome
};

//console.log(module.exports);