const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateWindChill(t, v) {
    return 35.74 + 0.6215 * t - 35.75 * Math.pow(v, 0.16) + 0.4275 * t * Math.pow(v, 0.16);
}

rl.question("Enter temperature in Fahrenheit (t): ", function (tInput) {
    rl.question("Enter wind speed in miles per hour (v): ", function (vInput) {
        const t = parseFloat(tInput);
        const v = parseFloat(vInput);

        if (!isNaN(t) && !isNaN(v) && Math.abs(t) <= 50 && v >= 3 && v <= 120) {
            const windChill = calculateWindChill(t, v);
            console.log(`Wind Chill: ${windChill.toFixed(2)} Fahrenheit`);
        } else {
            console.log("Invalid input. Please enter valid values for temperature and wind speed.");
        }

        rl.close();
    });
});
