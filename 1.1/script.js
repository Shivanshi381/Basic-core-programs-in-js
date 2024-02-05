
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function takeUserNameInput() {
    rl.question("Enter your UserName: ", function(UserName) {
        if (UserName && UserName.length >= 3) {
            replaceAndPrintString(UserName);
            rl.close();
        } else {
            console.log("Invalid Input! Enter a string with at least 3 characters");
            rl.close();
        }
    });
}

function replaceAndPrintString(UserName) {
    let templateString = "Hello <<UserName>>, How are you?";
    let replacedString = templateString.replace("<<UserName>>", UserName);
    console.log(replacedString);
}

takeUserNameInput();
