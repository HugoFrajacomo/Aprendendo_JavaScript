// aula 169

 /* 

switch (parâmetro) {

    case 1:
        se parâmetro === 1
        break

    case 2:
        se parâmetro === 2
        break

    case 3:
        se parâmetro === 3
        break
    
    default:
        se parâmetro não encontrado
}


 */

// Aplicando: 

var a = Number(prompt('Escolha o seu lanche: 1 - X-salada, 2 - X-bacon, 3 - X-tudo' ))

switch (a) {

    case 1: 
        document.write("X-Salada")
        break
    
    case 2:
        document.write("X-Bacon")
        break

    case 3: 
        document.write("X-Tudo")
        break

    default: 
        document.write("Reveja a opção desejada, ela deve ser igual a 1, 2 ou 3")
        break
        
}

