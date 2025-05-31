function alterarStatus(numero){//função que altera o stauts
    let gameClicado = document.getElementById(`game-${numero}`);//declara a variavel gameClicado como o html com o parâmetro recebido 
    let imagem = gameClicado.querySelector('.dashboard__item__img');//declara a variavel imagem do jogo selecionado 
    let botao = gameClicado.querySelector('.dashboard__item__button'); //declara a variavel como o botão do jogo selecionado

    if(imagem.classList.contains("dashboard__item__img--rented")){//se a variavel imagem contem na sua lista a classe rented
        imagem.classList.remove("dashboard__item__img--rented");//remove essa classe da imagem
        botao.classList.remove("dashboard__item__button--return");//remove essa classe do botão
        botao.textContent = 'Alugar';//troca o texto do botão
     
    } else{//se não
    imagem.classList.add("dashboard__item__img--rented");//adiciona a classe a imagem
    botao.textContent = 'Devolver';//troca o texto do botão
    botao.classList.add("dashboard__item__button--return");//adiciona a classe ao botão
    }
   
}

