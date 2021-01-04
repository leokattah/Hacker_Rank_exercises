'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
// O método repeat() constrói e retorna uma nova string com um determinado número de cópias concatenadas
// da string original.
// O método padStart() preenche a string original com um determinado caractere, ou conjunto de caracteres,
//  (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido. 
// O preenchimento é aplicado antes do primeiro caractere da string original. A string original não é modificada.
  for (let i = 1; i <= n; i++) {
  console.log("#".repeat(i).padStart(n));
  }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
