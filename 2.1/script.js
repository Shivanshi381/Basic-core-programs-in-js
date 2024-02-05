const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function read2DArray(rows, cols, array, i, j) {
    if (i < rows) {
        if (j < cols) {
            rl.question(`Enter value for element at position (${i + 1}, ${j + 1}): `, function (input) {
                const value = parseFloat(input);
                if (!isNaN(value)) {
                    array[i].push(value);
                    read2DArray(rows, cols, array, i, j + 1);
                } else {
                    console.log("Invalid input. Please enter a valid number.");
                    read2DArray(rows, cols, array, i, j);  // Re-enter the value for the same column
                }
            });
        } else {
            read2DArray(rows, cols, array, i + 1, 0);
        }
    } else {
        print2DArray(array);
        rl.close();
    }
}

function print2DArray(array) {
    console.log("2D Array:");

    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join('\t'));
    }
}

rl.question("Enter the number of rows: ", function (rowsInput) {
    const rows = parseInt(rowsInput);

    rl.question("Enter the number of columns: ", function (colsInput) {
        const cols = parseInt(colsInput);

        if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
            console.log("Invalid input. Please enter valid positive integers for rows and columns.");
            rl.close();
        } else {
            const array = [];
            for (let i = 0; i < rows; i++) {
                array.push([]);
            }
            read2DArray(rows, cols, array, 0, 0);
        }
    });
});
