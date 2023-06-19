//Funções anonimas, são funções que não possuem nome

var exibirSaudacao = function (nome) {
    document.write('Olá ' + nome + ', está tudo bem?')
}

var nome = String(prompt('Coloque o seu nome'))
exibirSaudacao (nome)