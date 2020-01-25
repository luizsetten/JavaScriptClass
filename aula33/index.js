const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Setten',
    idade: 21,
    endereco: {
        rua: 'Capitão Afonso',
        numero: 370
    }
};

const {nome: teste = '', sobrenome, endereco: { rua, numero}, endereco} = pessoa; 
//caso o atributo não exista pode-se atribuir um valor padrão, que será substituido caso exista
console.log(rua, numero, endereco);

const { nome, ...resto} = pessoa;
console.log(resto);