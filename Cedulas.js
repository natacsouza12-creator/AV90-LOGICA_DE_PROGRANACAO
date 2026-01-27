var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valorTotal = parseInt(lines[0]);

console.log(valorTotal);

let resto = valorTotal;

const notas = [100, 50, 20, 10, 5, 2, 1];

for (let nota of notas) {
    let quantidadeNotas = Math.floor(resto / nota);
    
    console.log(quantidadeNotas + " nota(s) de R$ " + nota + ",00");
    
    resto = resto % nota;
}