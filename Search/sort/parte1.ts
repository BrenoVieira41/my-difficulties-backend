export { }

let list1 = [1, 2, 3, 4];
let list2 = [];
let nomes = ['MARIA', 'JOAO', 'ANABELA'];

// sort: ordena a coleção conforme a função de comparação informada como parâmetro

function comparacaoPorTamanhoCrescente(s1 : string, s2 : string) : number {
  return s1.length - s2.length;
}

let s1 = nomes.sort(comparacaoPorTamanhoCrescente);
console.log(s1);
let s2 = nomes.sort((x, y) => x.length - y.length);
console.log(s2);
//Padrão do javascript e order alfabética crescente então se utilizar a chamada vazia ele tras o padrão
let s3 = nomes.sort();
console.log(s3);

