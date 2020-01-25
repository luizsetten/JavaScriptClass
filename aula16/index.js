const alunos = ['Luiz', 'Maria', 'João'];

alunos.push('Rafael'); //Adiciona no fim
alunos.unshift('Marcelo'); //Adiciona no inicio

const removido = alunos.pop(); //Remove no final
const rem2 = alunos.shift(); // Remove no inicio

delete alunos[1]; //Remove um indice especifico sem alterar o tamanho do vetor