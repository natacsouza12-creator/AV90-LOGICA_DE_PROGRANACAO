var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valoresPositivos = 0;
let somaPositivos = 0;

for (let i = 0; i < 6; i++) {
    let valor = parseFloat(lines[i]);
    
    if (valor > 0) {
        valoresPositivos++;
        somaPositivos += valor;
    }
}

const media = somaPositivos / valoresPositivos;

console.log(valoresPositivos + " valores positivos");
console.log(media.toFixed(1));
