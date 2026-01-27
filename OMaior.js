var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var values = input.split(' ');

let a = parseInt(values[0]);
let b = parseInt(values[1]);
let c = parseInt(values[2]);

let maiorAB = (a + b + Math.abs(a - b)) / 2;

let maiorFinal = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(maiorFinal + " eh o maior");