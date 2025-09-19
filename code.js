let jogosAlugados = 0;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        const resposta = confirm(`Você deseja realmente alugar o jogo? `);

        if (resposta) {
            jogosAlugados++;
            imagem.classList.add('dashboard__item__img--rented');
            botao.textContent = 'Devolver';
            botao.classList.add('dashboard__item__button--return');
            console.log(`Quantidades de jogos alugados: ${jogosAlugados}`);
        } else {
            console.log("Não");
        }
    }
    //alert(nomeJogo.textContent);
}
console.log(`Quantidades de jogos alugados: ${jogosAlugados}`);