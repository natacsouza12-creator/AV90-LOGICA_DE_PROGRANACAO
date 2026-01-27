var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let infoPeca1 = lines[0].split(' ');
let qtePeca1 = parseInt(infoPeca1[1]);
let valorPeca1 = parseFloat(infoPeca1[2]);
let infoPeca2 = lines[1].split(' ');
let qtePeca2 = parseInt(infoPeca2[1]);
let valorPeca2 = parseFloat(infoPeca2[2]);

let total = (qtePeca1 * valorPeca1) + (qtePeca2 * valorPeca2);

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));