var a1 = prompt("Digite primeiro número")
var a2 = prompt("Digite segundo número")

document.write(a1 + a2) 
//contatena os valores "soma textos"

// Para converter os valores para tipos numéricos temos que fazer: 

var a3 = parseInt(prompt("Digite terceiro número"))
var a4 = parseInt(prompt("Digite quarto número"))

document.write(a3 + a4 + "<br><hr> Número é somado") 
//Desta forma as variaveis a1 e a2 serão encaradas como números (somente a parte inteira) e o javascript irá somar as variáveis


var a5 = parseFloat(prompt("Digite o quinto número"))
var a6 = parseFloat(prompt("Digite o sexto número"))

document.write(a5 + a6 + "<br><hr> Número é somado com casas decimais") 
//Desta forma as variaveis a1 e a2 serão encaradas como números (somente a parte inteira) e o javascript irá somar as variáveis


//Caso eu queira que algum valor numérico fixo seja concatenado, posso tratar ele como uma string utilizando .toString()







