var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const fs = require("fs");

let valor = Math.round(parseFloat(input) * 100); // converte para centavos

const notas = [10000, 5000, 2000, 1000, 500, 200];
const moedas = [100, 50, 25, 10, 5, 1];

console.log("NOTAS:");
for (let nota of notas) {
    let qtd = Math.floor(valor / nota);
    console.log(`${qtd} nota(s) de R$ ${(nota / 100).toFixed(2)}`);
    valor %= nota;
}

console.log("MOEDAS:");
for (let moeda of moedas) {
    let qtd = Math.floor(valor / moeda);
    console.log(`${qtd} moeda(s) de R$ ${(moeda / 100).toFixed(2)}`);
    valor %= moeda;
}