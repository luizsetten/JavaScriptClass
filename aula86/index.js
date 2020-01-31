function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    
    return Math.floor(Math.random() * (max-min)+min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');


        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', aleatorio(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi(222, aleatorio(1,3));
    })
    .then(resposta => {
        return resposta + ' vai pro outro THEN';
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', aleatorio(1,3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Ultimo a ser exibido.');
    })
    .catch(e => {
        console.log('Erro:', e);
    });

console.log('Ola antes de tudo.');



// function esperaAi(msg, tempo, cb) {
//     setTimeout(() => {
//         console.log(msg);
//         if(cb) cb();
//     }, tempo);
// }

// esperaAi('Frase 1', aleatorio(1,5), function() {
//     esperaAi('Frase 2', aleatorio(1,5), function() {
//         esperaAi('Frase 3', aleatorio(1,5), function() {
//             esperaAi('Frase 4', aleatorio(1,5));
//         });
//     });
// });



