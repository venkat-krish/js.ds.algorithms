
const factorial = (n) => {
    if (n == 0) return 1;

    var product = 1;

    while (n > 0) {
        product = product * n;

        n--;
    }

    return product;
}

function fact(n){
    if (n == 0) return 1;

    return fact(n-1) * n;
}

var iFact = factorial(3);

console.log(`Factorial of 3: ${iFact}`);

console.log(`Recursive factorial 3: ${fact(5)}`);
