/*

if (condição) {
    O que acontece se atender a condição
}

else {
    Caso não atenda.. o que acontece.
}

*/

/*-------------------------------------------------------*/

/*

let situacao = false

if (situacao == true) {
    document.write("Informação verdadeira" + "<br>")
    document.write("<hr>")
}

else {
    document.write('informação falsa' + "<br>")
    document.write("<hr>")
}

*/

/*-------------------------------------------------------*/

/*
var p1 = Number(prompt("digite a nota do aluno"))
var p2 = 7
var p3 = 5
var media = (p1 + p2 + p3)/3

if (media >= 6) {
    document.write("Aluno foi aprovado com média igual á: " +media.toFixed(1))
}
else {
    document.write('aluno foi reprovado com média igual a: ' + media.toFixed(1))
}
*/

/* Utilizando if e else com operadores lógicos -------------------*/
/*
if (2 == 2 && 3>= 1) {
    document.write('verdadeiro')
}
else {
    document.write("false")
}
*/

/* OPERADOR TERNÁRIO -------------------*/

//var resultado = <condicao> ? <verdadeiro> :  <Falso>

var nota = 10
var media = 6
var faltas_max = 25
var faltas = 10

var resultado = (nota >= media && faltas <= faltas_max) ? "aprovado" : "reprovado"
document.write(resultado)