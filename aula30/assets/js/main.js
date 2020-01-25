const data = document.querySelector('.container h1');

const atual = new Date();

function diaSemana (num) {
    const semana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 
    'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    return semana[num];
}

function nomeMes (num) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
     'Junho', 'Julho', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
     return meses[num];
}

function corrigeHora (num) {
    return num >= 10 ? num : `0${num}`;
}

data.innerHTML = `${diaSemana(atual.getDay())}, ${atual.getDate()} de 
${nomeMes(atual.getMonth())} de ${atual.getFullYear()} <br/>
${corrigeHora(atual.getHours())}:${corrigeHora(atual.getMinutes())}`;