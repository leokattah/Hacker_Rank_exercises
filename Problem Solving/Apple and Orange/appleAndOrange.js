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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0, orangeCount = 0, p1 = 0, p2 = 0;
    while (p1 < apples.length || p2 < oranges.length) {
        if (apples[p1] >= 0) {
            let appleVal = a + apples[p1];
            if (appleVal >= s && appleVal <= t) {
                appleCount += 1
                p1 += 1;
            } else {
                p1 += 1
            }
        } else {
            p1 += 1;
        }
        if (oranges[p2] < 0) {
            let orangeVal = b + oranges[p2];
            if (orangeVal >= s && orangeVal <= t) {
                orangeCount += 1;
                p2 += 1;
            } else {
                p2 += 1;
            }
        } else {
            p2 += 1;
        }
     }
    console.log(appleCount);
    console.log(orangeCount);
}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
