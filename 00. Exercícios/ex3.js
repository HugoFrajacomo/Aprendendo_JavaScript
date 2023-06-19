// Ex na aula 185

var n1 = Number(prompt('Digite o primeiro numero'))
var n2 = Number(prompt('Digite o segundo numero'))
var operacao = String(prompt('Digite qual operador deseja colocar. soma ou subtração'))
var resultado = 0
function calc(n1, n2, operacao) {
    if (operacao == 'soma'){
        var resultado = n1 + n2
    }
    else if (operacao == 'subtração'){
        var resultado = n1 - n2
    }
    return resultado
}

document.write("O resultado é: " + calc(n1, n2, operacao))

