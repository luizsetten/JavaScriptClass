const produto = {nome: 'Produto', preco: 15.4};
const caneca = { 
    ...produto,
    material: 'Porcelana',
 };

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

for(let [chave, valor] of Object.entries(caneca)) {
    console.log(chave, valor);
}