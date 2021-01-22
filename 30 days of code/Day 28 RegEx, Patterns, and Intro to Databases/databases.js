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



function main() {
    const N = parseInt(readLine(), 10);
    const array = [];
    for(let i=0; i<N;i++){
        let find = readLine().match(/.+(?=@gmail)/);
        if(find){
            array.push(find[0].split(' ')[0]);
        }
    }
    console.log(array.sort().join('\n'))
}
