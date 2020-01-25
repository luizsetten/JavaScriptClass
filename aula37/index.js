const nome = 'Luiz Gustavo';

for (let valor of nome) {
    console.log(valor);
}

const lista = ['Luiz', 'Pedro', 'Fernando', 'Rafael'];

lista.forEach(function (elemento, indice, array) {
    console.log(indice, elemento, array);
});

//For classico - Iteráveis (array ou strings)
//For in - Retorna o indice ou chave (string, array ou objetos)
//For of - Retorna o valor em si (array ou string)