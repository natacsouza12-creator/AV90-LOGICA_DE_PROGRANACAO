var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor1 = parseInt(lines[0]);
var valor2 = parseInt(lines[1]);

var PROD = valor1 * valor2;

console.log("PROD = " + PROD);