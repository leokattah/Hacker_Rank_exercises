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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let _arr = arr.sort((a, b) => a - b)
    let minVals = _arr.slice(0, 4)
    let maxVals = _arr.slice(1)
    const arrSum = __arr => __arr.reduce((a, b) => a + b, 0)
    let minSum = arrSum(minVals)
    let maxSum = arrSum(maxVals)
    console.log(minSum, maxSum)
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
