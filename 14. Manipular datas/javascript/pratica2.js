//Calculo de dias entre duas datas

var data1 = new Date(2017, 0, 15)
var data2 = new Date(2017, 1, 23)

document.write(data1.toString())
document.write('<hr />')
document.write(data2.toString())


//converter data em algo que possamos calcular
document.write('<br /> <hr /> <br />')

//.getTime recupera o valor em milissegundos entre 1 de janeiro de 1970 a data em questão
document.write(data1.getTime())
document.write('<hr />')
document.write(data2.getTime())

//encontrar a quantidade de milissegundos entre data1 e data2
var subdata = Math.abs(data1.getTime() - data2.getTime())
document.write('<br /> <hr /> <br />')
document.write(Math.abs(subdata)) //Math.abs - trás o valor absoluto de um  número

// 1 dias tem 24h | cada hora tem 60 minutos | cada minutos tem 60 segundos | cada segundo tem 1000 milissegundos

var diaMils = 1*24*60*60*1000

//Agora calculamos quantos dias em milissegundos representam a nossa subdata

var dif = Math.ceil(subdata / diaMils)

document.write('<br /> <hr /> <br />')
document.write('<h1>A diferença entre as datas é de:</h1>')
document.write(dif + " Dias")