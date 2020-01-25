//(condição) ? 'Valor para verdadeiro' : 'Valor para falso';
 
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);


// if (pontuacaoUsuario >= 1000) {
//     console.log('Usario VIP');
// } else {
//     console.log('Usario normal');
// }