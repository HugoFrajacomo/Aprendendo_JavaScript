var nome = String(prompt("Insira o seu nome"))
var peso = parseFloat(prompt("insira o valor do seu peso em kg, com 2 até casas decimais"))
var altura = parseFloat(prompt("insira a sua altura em centímetros"))

//converter altura em metros
var alturam = altura / 100

var mcorp = peso / (alturam**2)

if (mcorp < 16) {
    var classificacao = "Baixo peso, muito grave!"
}

else if (mcorp < 17) {
    var classificacao = "Baixo peso, grave!"
}

else if (mcorp < 18.50) {
    var classificacao = "Baixo peso"
}

else if (mcorp < 25) {   
    var classificacao = "peso normal"
}

else if (mcorp < 30) {
    var classificacao = "sobrepeso"
}

else if (mcorp < 35) {
    var classificacao = "obesidade grau I"
}

else if (mcorp < 40) {
    var classificacao = "obesidade grau II"
}

else if (mcorp >= 40) {
    var classificacao = "obesidade grau III"
}

document.write(nome + " possui índice de massa corporal igual a " + mcorp.toFixed(2) + ", sendo classificado como " + classificacao)


