/*
.getDate() - Pega o dia de acesso
.getMonth() - Pega o Mês de acesso - considera mês de 0 a 11 (some +1 para ter o mês correto.)
.getFullYear() - Pega o ano de acesso

outros métodos verifique a pagina: https://www.w3schools.com/jsref/jsref_obj_date.asp
*/

var data = new Date() //forma para criar uma variável que recebe a data do pc de acesso

document.write(data.getDate() + "<br/>");
document.write((data.getMonth()+1) + "<br/>");
document.write(data.getFullYear() + "<br/>");

var dia = data.getDate()
var mes = data.getMonth()+1
var ano = data.getFullYear()

document.write(dia + "/" + mes + "/" + ano)


