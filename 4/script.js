const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printPowerof2(N) {
    if (N < 0 || N >= 31) {
        console.log("Enter a valid number in the range 0 <= N < 31");
        rl.close();
    } else {
        for (let i = 0; i <= N; i++) {
            console.log(`2^${i} = ${Math.pow(2, i)}`);
        }

        rl.question("Enter the power value N: ", function (input) {
            const newN = parseInt(input);
            if (isNaN(newN)) {
                console.log("Enter a valid integer!");
                rl.close();
            } else {
                printPowerof2(newN);
            }
        });
    }
}

rl.question("Enter the power value N: ", function (input) {
    const initialN = parseInt(input);
    if (isNaN(initialN)) {
        console.log("Enter a valid integer!");
        rl.close();
    } else {
        printPowerof2(initialN);
    }
});
