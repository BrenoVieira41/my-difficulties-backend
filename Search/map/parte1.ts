export { }

let list1 = [1, 2, 3, 4];
let list2 = [];
let nomes = ['MARIA', 'JOAO', 'ANABELA'];

// --------------------------------------------------------------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados

function dobro(x : number) : number {
  return x * 2; 
}

function triplo(x : number) : number {
  return x * 3;
}

// tambem e possivel atribuição diretamente no map assim puxando a nova informação, ocupando ainda menos espaço
let m1 = list1.map(dobro);
let m2 = list1.map(triplo);
let m3 = list1.map(x => x * 4);

console.log('MAP ------------------------------');
console.log(m1);
console.log(m2);
console.log(m3);