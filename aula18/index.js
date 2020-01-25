function criaPesoa(nome, sobrenome, idade){
    return {
        nome, sobrenome, idade,

        fala(){
            console.log(`Olá meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`)
        },

        incrementaIdade(){
            ++this.idade;
        }
    };
}

const pessoa1 = criaPesoa('Luiz', 'Setten', 21);
pessoa1.fala();
console.log(pessoa1);