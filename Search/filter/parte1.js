"use strict";
exports.__esModule = true;
var list1 = [1, 2, 3, 4];
var list2 = [];
var nomes = ['MARIA', 'JOAO', 'ANABELA'];
// filter: retorna uma nova coleção contendo apenas aqueles elementos da coleção original que satisfazem um dado predicado
function par(x) {
    return x % 2 == 0;
}
// Ele trás (apénas) as informações que expecificamente pedidas
var f1 = list1.filter(par);
var f2 = list1.filter(function (x) { return x % 2 != 0; });
var f3 = list1.filter(function (x) { return x > 2; });
console.log('FILTER ------------------------------');
console.log(f1);
console.log(f2);
console.log(f3);
