const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findTripletsWithZeroSum(arr) {
    const triplets = [];

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }

    return triplets;
}

function printTriplets(triplets) {
    console.log("Distinct Triplets with Sum Zero:");
    triplets.forEach(triplet => console.log(triplet.join(', ')));
}

rl.question("Enter the number of integers: ", function (numIntegers) {
    rl.question("Enter the array of integers separated by space: ", function (input) {
        const arr = input.split(' ').map(Number);

        if (arr.length !== +numIntegers || arr.some(isNaN)) {
            console.log("Invalid input. Please enter a valid array of integers.");
        } else {
            const triplets = findTripletsWithZeroSum(arr);

            console.log(`Number of distinct triplets with sum zero: ${triplets.length}`);
            printTriplets(triplets);
        }

        rl.close();
    });
});
