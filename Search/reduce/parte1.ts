export { }

let list1 = [1, 2, 3, 4];
let list2 = [];
let nomes = ['MARIA', 'JOAO', 'ANABELA'];

// reduce: aplica cumulativamente uma função aos elementos de uma coleção, retornando o resultado final.
// * você pode informar, opcionalmente, um valor inicial como parâmetro (necessário para coleção vazia).

function soma(x: number, y: number) : number {
  return x + y
}

function produto(x: number, y: number) : number {
  return x * y
}

let r1 = list1.reduce(soma);
let r2 = list1.reduce(produto);

// Se o for em uma array vazia ele dara erro se não for tratado de forma correta
// let r3 = list2.reduce(soma); <- //ERRADO 
let r3 = list2.reduce(soma, 0);   //CORRETO

//Quando estiver atrás do (produto) não passar 0 como inicial pois 0 * 0 = 0
let r4 = list1.reduce(produto, 0); //ERRADO 

console.log('REDUCE ------------------------------');
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
