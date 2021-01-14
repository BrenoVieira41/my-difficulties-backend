"use strict";
exports.__esModule = true;
var list1 = [1, 2, 3, 4];
var list2 = [];
var nomes = ['MARIA', 'JOAO', 'ANABELA'];
// sort: ordena a coleção conforme a função de comparação informada como parâmetro
function comparacaoPorTamanhoCrescente(s1, s2) {
    return s1.length - s2.length;
}
var s1 = nomes.sort(comparacaoPorTamanhoCrescente);
console.log(s1);
var s2 = nomes.sort(function (x, y) { return x.length - y.length; });
console.log(s2);
//Padrão do javascript e order alfabética crescente então se utilizar a chamada vazia ele tras o padrão
var s3 = nomes.sort();
console.log(s3);
