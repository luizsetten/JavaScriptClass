function Pessoa(nome, sobrenome) {
    const ID = 123456;
    const metodoInterno = function() {
        console.log('Não será chamado externamente');
    }
    
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Luiz', 'Setten');
const p2 = new Pessoa('Pedro', 'Borges');
p1.metodo();