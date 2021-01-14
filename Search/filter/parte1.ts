export { }

let list1 = [1, 2, 3, 4];
let list2 = [];
let nomes = ['MARIA', 'JOAO', 'ANABELA'];

// filter: retorna uma nova coleção contendo apenas aqueles elementos da coleção original que satisfazem um dado predicado

function par(x: number) : boolean {
  return x % 2 == 0
}

// Ele trás (apénas) as informações que expecificamente pedidas
let f1 = list1.filter(par);
let f2 = list1.filter(x => x % 2 != 0);
let f3 = list1.filter(x => x > 2);

console.log('FILTER ------------------------------');
console.log(f1);
console.log(f2);
console.log(f3);