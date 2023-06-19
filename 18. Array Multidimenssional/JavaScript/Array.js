/* 

Array Multidimensional

Se trata de um array composto por outros arrays

*/

var listas_coisas = Array ()


listas_coisas['frutas'] = Array ()

listas_coisas['frutas'][0] = 'Banana' 
listas_coisas['frutas'][1] = 'Maçã' 
listas_coisas['frutas'][2] = 'Manga' 
listas_coisas['frutas'][3] = 'Uva' 
listas_coisas['frutas'][4] = 'Melancia' 

listas_coisas['legumes'] = Array ()

listas_coisas['legumes'][0] = 'Abóbora'
listas_coisas['legumes'][1] = 'Abobrinha'
listas_coisas['legumes'][2] = 'Aipim'
listas_coisas['legumes'][3] = 'Alho'
listas_coisas['legumes'][4] = 'Azeitona'

console.log(listas_coisas)
console.log(listas_coisas['frutas'][3]) //retorna a fruta da posição 3 da lista frutas - uva
console.log(listas_coisas['legumes'][4]) //retorna o legume da posição 3 da lista legumes - azeitona