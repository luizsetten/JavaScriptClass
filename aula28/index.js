// let data = new Date();
// console.log(data.toString());

// data = new Date('2020-01-09 12:26:45');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); //Mes em JavaScript começa em 0 e vai até 11
// console.log('Ano', data.getFullYear());
// console.log('Horas', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Milissegundos', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); //0- Domingo, 6- Sábado
// console.log(data.toString());

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);