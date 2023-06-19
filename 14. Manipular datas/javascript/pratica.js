//Adicionar ou remover dias de uma data

var data = new Date()

var dia = data.getDate()
var mes = data.getMonth()+1
var ano = data.getFullYear()

//Atual
document.write("<h1>Dia Atual</h1>" )
document.write(data)

//adicionar dias
document.write("<h1>Dia Seguinte</h1>" )
data.setDate(data.getDate() + 1)
document.write(data + "<br/>")

//adicionar 500 dias
document.write("<h1>Adicionar 5000 dias</h1>" )
data.setDate(data.getDate() + 5000)
document.write(data + "<br/>")

//subtrair dias
document.write("<h1>Dia Anterior</h1>" )
data.setDate(data.getDate() - 5002)
document.write(data)

//Da para fazer a mesma coisa utilizando .setMonth ou para ano com .setFullYear
