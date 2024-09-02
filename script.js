let indiceImagem = 0;

function mudarImagem(direcao) {
    const imagens = document.querySelectorAll('.imagens img');
    indiceImagem += direcao;

    if (indiceImagem < 0) {
        indiceImagem = imagens.length - 1;
    } else if (indiceImagem >= imagens.length) {
        indiceImagem = 0;
    }

    const deslocamento = -indiceImagem * 100;
    document.querySelector('.imagens').style.transform = `translateX(${deslocamento}%)`;
}