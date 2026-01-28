var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let totalSegundos = parseInt(lines.shift());

const horas = Math.floor(totalSegundos / 3600);
totalSegundos %= 3600; 

const minutos = Math.floor(totalSegundos / 60);

const segundos = totalSegundos % 60;

console.log(`${horas}:${minutos}:${segundos}`);