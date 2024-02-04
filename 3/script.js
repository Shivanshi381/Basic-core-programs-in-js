const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a year (4 digit): ", function (userInput) {
    if (isNaN(userInput) || userInput.length !== 4) {
        console.log("Enter a valid 4-digit year");
    } else {
        userInput = parseInt(userInput);

        if ((userInput % 4 === 0 && userInput % 100 !== 0) || userInput % 400 === 0) {
            console.log("Is a Leap year!");
        } else {
            console.log("Is not a leap year");
        }
    }

    rl.close();
});
