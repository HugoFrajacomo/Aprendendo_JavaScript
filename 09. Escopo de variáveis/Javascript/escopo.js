// 3 escopos: Global, função e de block


//variável de escopo global/Bloco - Variável "serie" será chamada em qlq lugar.
//Porem se eu declarar um escopo de bloco dentro de uma função, ela não ficará disponível em outro lugar sem ser na função
var serie = 'Friends'

if (true) {
    var serie2 = 'Game of Thrones'
    document.write(serie + "<br />")
    document.write(serie2 + "<br />")
}

document.write("<hr />")

function x () {
    var serie3 = 'The Walking Dead'
    document.write(serie)
}

x ()
//Como a "serie3" foi declarada dentro de uma função, ela só existe lá dentro e desta forma não irá mostrar o valor fora da função.
document.write(serie3 + "<br />")