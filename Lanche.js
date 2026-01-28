var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

const codigo = parseInt(lines[0]);
const quantidade = parseInt(lines[1]);

let preco = 0;

switch (codigo) {
    case 1:
        preco = 4.00;
        break;
    case 2:
        preco = 4.50;
        break;
    case 3:
        preco = 5.00;
        break;
    case 4:
        preco = 2.00;
        break;
    case 5:
        preco = 1.50;
        break;
}

const total = preco * quantidade;

console.log("Total: R$ " + total.toFixed(2));