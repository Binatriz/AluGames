function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard_item_img');
    let botao = gameClicado.querySelector('.dashboard_item_button');
    let nomeJogo = gameClicado.querySelector('.dashboard_item_name');

    alert(nomeJogo.textContent);
}