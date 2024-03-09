let listaNum = []
let numLimite = 10
let numSecreto = geraNumAleatorio();
let tentativas = 1

//let titulo = document.querySelector('h1')
//titulo.innerHTML = 'Jogo do número secreto'

// função com parametros
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2})
}

function exibirMensagem(){
    exibirTexto('p', 'Escolha um número entre 1 e 10')
    exibirTexto('h1', 'Jogo do número secreto')
}

exibirMensagem()

//função simples
function verificarChute(){
    let chute = document.querySelector('input').value

    if (chute == numSecreto){
        exibirTexto('h1', 'Acertou')
        let palavra = tentativas>1 ? 'tentativas' : 'tentativa'
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavra}`
        exibirTexto('p', mensagem)
        document.getElementById('reiniciar').removeAttribute('disable')
    } else if ( chute > numSecreto){
        exibirTexto('h1', 'Número secreto é menor')
    } else {
        exibirTexto('h1', 'Número secreto é maior')
        tentativas++
        limparCampo()
    }
    
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

//função com retorno de informação
function geraNumAleatorio(){
    
    let numEscolhido =  parseInt(Math.random() * numLimite +1)
    let quantidadeElementos = listaNum.length

    if(quantidadeElementos == numLimite){
        listaNum = []
    }

    if (listaNum.includes(numEscolhido)){
        return geraNumAleatorio
    } else {
        listaNum.push(numEscolhido)
        return numEscolhido
    }
}

function reinicarJogo(){
    numSecreto = geraNumAleatorio()
    limparCampo()
    tentativas = 1
    exibirMensagem()
    document.getElementById('reinicar').setAttribute('disabled', true)
}