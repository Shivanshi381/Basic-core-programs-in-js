const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function computePrimeFactors(N) {
    console.log(`Prime factors of ${N} are:`);
    
    // Print the number of 2s that divide N
    while (N % 2 === 0) {
        console.log(2);
        N = N / 2;
    }

    // N must be odd at this point, so a skip of 2 ( i = i + 2) can be used
    for (let i = 3; i * i <= N; i = i + 2) {
        // While i divides N, print i and divide N
        while (N % i === 0) {
            console.log(i);
            N = N / i;
        }
    }

    // If N is a prime number greater than 2
    if (N > 2) {
        console.log(N);
    }
}

rl.question("Enter a number to find its prime factors: ", function (input) {
    const number = parseInt(input);

    if (isNaN(number) || number <= 0) {
        console.log("Enter a valid positive integer.");
    } else {
        computePrimeFactors(number);
    }

    rl.close();
});
