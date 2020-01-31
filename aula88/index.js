function aleatorio(min=0, max=3){
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

// esperaAi('Fase 1', aleatorio())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', aleatorio());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', aleatorio());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {console.log('Terminamos na fase:', fase);
//     })
//     .catch(e => console.log(e));

async function executa() {
    try {
   const fase1 = esperaAi('Fase 1', aleatorio());
   console.log(fase1);

   setTimeout(() => {
    console.log(`Essa promise estava pendente`, fase1);
   }, 5000);
   const fase2 = await esperaAi('Fase 2', aleatorio());
   console.log(fase2);
   const fase3 = await esperaAi('Fase 3', aleatorio());
   console.log('Terminamos na fase:', fase3)
    } catch (e) {
        console.log(e);
    }
}


executa();