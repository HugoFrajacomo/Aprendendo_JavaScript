// crie uma aplicação capaz de indentificar a faixa etária com base na idade informada pelo usuário. Considere os seguintes critérios... (Documento aula 167 - udemy - Domine web)

var idade = parseInt(prompt("digite sua idade"))

if (idade < 15) {
    document.write('Criança')
}

else if (idade < 30) {
    document.write('Jovem')
}

else if (idade < 60) {
    document.write('Adulto')
}

else if (idade >= 60) {
    document.write('idoso')
}