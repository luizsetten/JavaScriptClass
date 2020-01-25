function mostrHora () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function () {
    console.log(mostrHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 10000);

setTimeout(function () {
    console.log('Ola meu consagrado');
}, 5000);