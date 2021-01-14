"use strict";
exports.__esModule = true;
var list1 = [1, 2, 3, 4];
var list2 = [];
var nomes = ['MARIA', 'JOAO', 'ANABELA'];
// --------------------------------------------------------------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados
function dobro(x) {
    return x * 2;
}
function triplo(x) {
    return x * 3;
}
var m1 = list1.map(dobro);
var m2 = list1.map(triplo);
// tambem e possivel a atribuição diretamente no map assim puxando a nova informação ocupando ainda menos espaço
var m3 = list1.map(function (x) { return x * 4; });
console.log(m1);
console.log(m2);
console.log(m3);
