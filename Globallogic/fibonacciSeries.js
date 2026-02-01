function fibonacciSequence(n) {
    let result = [];
    if (n === 1) {
        result.push(0, 1);
    } else {
        result = fibonacciSequence(n - 1);
        result.push(result[result.length - 1] + result[result.length - 2]);
    }
    return result;
}

let n = 10;
console.log(fibonacciSequence(n));

