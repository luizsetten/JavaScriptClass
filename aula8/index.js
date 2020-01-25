const nome = "Luiz Gustavo";
const sobrenome = "Chinelato Setten";
const idade = 21;
const peso = 74;
const altura = 1.80;
let imc;
imc = peso /(altura*altura);
let anoNascimento = 1998;

console.log(nome,sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem', altura, 'm e seu IMC é de',imc);
console.log(`${nome} nasceu em ${anoNascimento}`);