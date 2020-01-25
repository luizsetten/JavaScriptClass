function meuEscopo () {
    const form = document.querySelector('.form');  //.form seleciona pela classe form //#form seleciona pelo id form //form(sem nada a mais) seleciona pelo tipo de atributo, seja um botão ou um paragrafo, no caso foi um formulario, form
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        let p = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(p);
        console.log(pessoas);

        resultado.innerHTML += `${p.nome}, ${p.sobrenome}, ${p.peso}, ${p.altura} <br/>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();