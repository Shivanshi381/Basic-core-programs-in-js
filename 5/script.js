const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcHarmonicNumber(N){
    let harmonicvalue=0;
    for(let i=1;i<=N;i++){
        harmonicvalue+=1/i;
    }
    return harmonicvalue;
}
rl.question("Enter value of N(it should be >0):", function(input){
const N=parseInt(input);
if(isNaN(N) || N<=0){
    console.log("Enter a valid positive integer value for N");}
else{
    const result=calcHarmonicNumber(N);
    console.log(`The ${N}th Harmonic Value is :${result.toFixed(4)}`);

}
rl.close();
});