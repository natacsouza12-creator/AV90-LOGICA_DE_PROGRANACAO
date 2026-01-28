var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const ddd = parseInt(lines.shift());

const cidades = {
    61: "Brasilia",
    71: "Salvador",
    11: "Sao Paulo",
    21: "Rio de Janeiro",
    32: "Juiz de Fora",
    19: "Campinas",
    27: "Vitoria",
    31: "Belo Horizonte"
};

if (cidades[ddd]) {
    console.log(cidades[ddd]);
} else {
    console.log("DDD nao cadastrado");
}