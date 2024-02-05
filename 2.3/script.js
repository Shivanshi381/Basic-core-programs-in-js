const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the value of x: ", function (xvalInput) {
    rl.question("Enter the value of y: ", function (yvalInput) {
        const x = parseFloat(xvalInput);
        const y = parseFloat(yvalInput);

        if (!isNaN(x) && !isNaN(y)) {
            const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            console.log(`Euclidean distance from point (${x}, ${y}) to the origin (0, 0): ${distance}`);
        } else {
            console.log("Invalid input.");
        }

        rl.close();
    });
});
