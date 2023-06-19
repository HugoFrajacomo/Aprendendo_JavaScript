function calcular (tipo, valor) {
    if (tipo == 'acao') {
        if (valor == 'c') {
            //limpar o visor de resultado
            document.getElementById('resultado').value = ''
        }
        if (valor === '/' || valor === '*' || valor === '+' || valor === '-' || valor === '.') {
            document.getElementById('resultado').value += valor //concatena o conteúdo do campo
        }

        if (valor === '=') {
            var valor_campo = eval(document.getElementById('resultado').value) //função eval faz a linha ser considerada pelo interpretador do javascript
            document.getElementById('resultado').value = valor_campo
        }
    }

    else if (tipo == 'valor') {
        document.getElementById('resultado').value += valor
    }
}