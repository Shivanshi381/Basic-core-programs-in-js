const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the value of a: ", function (aInput) {
    rl.question("Enter the value of b: ", function (bInput) {
        rl.question("Enter the value of c: ", function (cInput) {
            const a = parseFloat(aInput);
            const b = parseFloat(bInput);
            const c = parseFloat(cInput);

            if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
                const delta = b * b - 4 * a * c;

                if (delta >= 0) {
                    const root1 = (-b + Math.sqrt(delta)) / (2 * a);
                    const root2 = (-b - Math.sqrt(delta)) / (2 * a);

                    console.log(`Root 1 of x: ${root1}`);
                    console.log(`Root 2 of x: ${root2}`);
                } else {
                    console.log("The roots are complex. Quadratic equation has no real roots.");
                }
            } else {
                console.log("Invalid input. Please enter valid numerical values for a, b, and c.");
            }

            rl.close();
        });
    });
});
