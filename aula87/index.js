function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    
    return Math.floor(Math.random() * (max-min)+min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(false);
            return;
        }

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// const promises = [
//     'Primeiro valor',
//     esperaAi('Primise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     'Outro valor'
// ];

// Promise.all(promises)
// .then(valor => {
//     console.log(valor);
// })
// .catch(erro => {
//     console.log(erro);
// });

// Promise.race(promises)
// .then(valor => {
//     console.log(valor);
// })
// .catch(erro => {
//     console.log(erro);
// });

function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 2000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));