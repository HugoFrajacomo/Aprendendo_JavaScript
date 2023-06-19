function distribuiCaractere () {

    //Selecionar o valor digitado
    var caracter = document.getElementById('entrada').value

    //Limpar o campo de digitação
    document.getElementById('entrada').value = ''

    //Limpar espaços em brancos nas extremidades da string
    caracter = caracter.trim()

    console.log(caracter)

    if (
        caracter == '0' ||
        caracter == '1' ||
        caracter == '2' ||
        caracter == '3' ||
        caracter == '4' ||
        caracter == '5' ||
        caracter == '6' ||
        caracter == '7' ||
        caracter == '8' ||
        caracter == '9'
        ) {
        //adiciona o caracter no campo referente a numeros
        document.getElementById('numeros').value = caracter
        }
    
    else {
        //adiciona o caracter no campo referente a letras
        document.getElementById('letras').value = caracter
    }
    
}

