/*Funções podem ser de 2 tipos 

1º Void: Não retorna informação ao usuário, de execução
2º Retorno: Retorna o resultado para o usuário

*/

function calcularAreaTerreno (largura, comprimento) {

    //lógica da função
    var area = largura * comprimento
    return area
}

var largura = Number(prompt("Digite a largura do terreno em metros"))
var comprimento = Number(prompt("Digite a comprimento do terreno em metros"))

var area = calcularAreaTerreno (largura, comprimento)
document.write("O terreno possuí: " + area.toFixed(2) + " m²") 