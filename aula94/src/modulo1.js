export const nome = 'Luiz';
export const sobrenome = 'Setten';
export const idade = 21;

export default function soma(x, y){
    return x + y;
}

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}