function alterarStatus(id){
    const gameClicado = document.getElementById(`game-${id}`)
    let imagem= gameClicado.querySelector('.dashboard__item__img')
    let botao= gameClicado.querySelector('.dashboard__item__img')
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented')
        botao.classList.remove('dashboard__item__button--rented')
        botao.textContent = 'Alugar'
    } else {
        imagem.classList.add('dashboard__item__img--rented')
        botao.classList.add('dashboard__item__button--rented')
        botao.textContent = 'Devolver'
    }

}