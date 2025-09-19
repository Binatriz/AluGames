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
        jogosAlugados--;
    } else {
        const resposta = confirm(`Você deseja realmente alugar o jogo? `);

        if (resposta) {
            jogosAlugados++;
            imagem.classList.add('dashboard__item__img--rented');
            botao.textContent = 'Devolver';
            botao.classList.add('dashboard__item__button--return');
            contarEExibirJogosAlugados()
        } else {
            console.log("Não");
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

function contarEExibirJogosAlugados() {
    console.log(`Quantidades de jogos alugados: ${jogosAlugados}`);
}