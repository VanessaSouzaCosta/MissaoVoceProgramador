
let chave = "8faed8802d01cb9ed916e8811e5f61e0"

function colocarNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    //innerHTML é para colocar dentro do arquivo HTML
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".clima").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + Math.floor(dados.main.humidity) + "%"
    document.querySelector(".nuvem").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade) {
    // async indica que a função acessa um servidor fora do codigo
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave +
        "&lang=pt_br" + "&units=metric")
        .then(resposta => resposta.json())
    // fetch é a ferramenta que busca a informação no servidor
    colocarNaTela(dados)
}

function cliqueiNoBotao() {
    // A função é o trecho do codigo que só vai executar quando chamado
    let cidade = document.querySelector(".input-cidade").value
    // let é a variavel; document se refere ao arquivo HTML; queryselector seleciona algo dentro do HMTL
    console.log(cidade)
    // Console imprime na tela, abre o hmtl > botão direito, inspecionar > console
    buscarCidade(cidade)

}