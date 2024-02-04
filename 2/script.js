const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numOfFlipsPercent() {
    rl.question("Enter Number of Flips: ", function (numOfFlips) {
        numOfFlips = parseInt(numOfFlips);

        if (numOfFlips <= 0 || !Number.isInteger(numOfFlips)) {
            console.log("Please enter a valid positive integer");
            rl.close();
            return;
        }

        let headcount = 0;
        let tailcount = 0;

        for (let i = 0; i < numOfFlips; i++) {
            if (Math.random() < 0.5) {
                headcount++;
            } else {
                tailcount++;
            }
        }

        let headpercent = (headcount / numOfFlips) * 100;
        let tailpercent = (tailcount / numOfFlips) * 100;

        console.log(`Number of Flips: ${numOfFlips}`);
        console.log(`Head Percentage: ${headpercent}`);
        console.log(`Tail Percentage: ${tailpercent}`);

        rl.close();
    });
}

numOfFlipsPercent();
