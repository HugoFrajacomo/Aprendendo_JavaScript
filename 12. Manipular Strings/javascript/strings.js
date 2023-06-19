/*
Propriedade length - Quantidade de caracteres na string

.charAt() - Retorna a letra referente no índice de posição das letras em um texto

.indexOf() - Primeira ocorrência de uma letra (diferencia entre maiúscula e minuscula)

.replace() - Subistitue uma sequencia de caracteres por outra.

.substr() - A partir de uma posição, quantos caracteres eu recupero

.toLowerCase() - Deixa todos os caracteres em letras maiúsculas

.toUpperCase() - Deixa todos os caracteres em letras minusculas

.trim() - Remove os espaços nas extremidades dos caracteres

Consulte mais opções em: https://www.w3schools.com/jsref/jsref_obj_string.asp
*/


var nome = "Jorge Sant Ana"

document.write(nome.length + '<br />' + ' - Representa o tamanho total do nome' + '<br />')

document.write(nome.charAt(7) + '<br />' + ' - Representa a 7ª lacuna ocupada no nome (espaçamento conta como uma' + '<br />')

document.write(nome.indexOf('g') + '<br />' + ' - Representa a posição da primeira letra g que aparece' + '<br />')

document.write(nome.replace('Sant Ana', 'Silva') + '<br />' + ' - Substitue sequencia de caracter' + '<br />')

document.write(nome.substring(6, 10) + '<br />' + ' - Retira um trecho do texto' + '<br />')

document.write(nome.toLocaleLowerCase() + '<br />' + ' - Retira um trecho do texto' + '<br />')

document.write(nome.toUpperCase() + '<br />' + ' - Retira um trecho do texto' + '<br />')
