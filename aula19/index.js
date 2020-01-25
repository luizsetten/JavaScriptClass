const vetor = [1,2,3];
let vetor2 = vetor; //Mesma região de memoria
let vetor3 = [...vetor] //Faz uma copia do vetor em outra região de memória

//o mesmo vale para objetos e funções

let pessoa = {
    nome: 'Luiz',
    sobrenome: 'Setten'
};

let pessoa2 = {...pessoa};