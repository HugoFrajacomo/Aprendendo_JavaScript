function exibirArtigo (id, callbackSucesso, callbackErro) {
    //Lógica: recuperar o id via requisição http
    if (true) {
        callbackSucesso('Funções de callback em js', 'Funções de callback são utilizadas... ')
    }
    else {
        callbackErro('Erro ao recuperar os dados de callback')
    }
}

var callbackSucesso = function (titulo, descricao) {
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr />')
    document.write('<p>' + descricao + '</p>')
}

var callbackErro = function (erro) {
    document.write('<p><b>Erro:</b> ' + erro + '</p>')
}

exibirArtigo(1, callbackSucesso, callbackErro)