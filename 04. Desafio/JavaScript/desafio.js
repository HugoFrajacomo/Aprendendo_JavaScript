var a = 10
var b = 20
var c = null

document.write("a: " + a + "<br />")
document.write("b: " + b + "<br />")
document.write("c: " + c + "<br />")

document.write("<hr />")

// logica de inversão das variáveis A e B
c = a // Armazena temporariamente o valor da variável A
a = b //Sobrepoe o valor de a por b
b = c //Sobrepoe o valor de b por c (antigo a)
c = null



document.write("a: " + a + "<br />")
document.write("b: " + b + "<br />")
document.write("c: " + c + "<br />")