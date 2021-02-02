// Si o cliente tiver mais de 100 pontos e e premium si não ele e comum
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum' // expressão, ? oque acontece ser for verdadeiro, : Se for falso
console.log(tipo);