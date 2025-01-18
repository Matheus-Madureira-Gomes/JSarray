function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    const idadeArray = [];
    const alturaArray = [];


    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value 
        });

        idadeArray.push({
            idade: idade.value
        });

        alturaArray.push({
            altura: altura.value
        });

        console.log(pessoas);
        console.log(idadeArray);
        console.log(alturaArray);

        resultado.innerHTML += `<p>${nome.value} <br> ${sobrenome.value} <br> ${idade.value} <br> ${altura.value} </p>`;
    };

    form.addEventListener('submit', recebeEventoForm);
    
};
meuEscopo();