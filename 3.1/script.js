const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function runGambilngSim(stake,goal){
    let bets=0;
    let wins=0;
    while(stake>0 && stake<goal){
        bets++;
        Math.random()<0.5 ? (stake++,wins++):stake--;
    }

return {bets,wins};
}
function runExp(N,stake,goal){
    let totalbets=0;
    let totalwins=0
    for(let i=0;i<N;i++){
        const{bets,wins}=runGambilngSim(stake,goal);
        totalbets+=bets;
        totalwins+=wins;
        const winspercent=(totalwins/totalbets)*100;
        console.log(`Win percentage=${winspercent.toFixed(2)}%`)
    }
    rl.question("Enter Number of experiments:",function(N){
        rl.question("Enter the amount at stake:",function(stake){
            rl.question("Enter your goal:",function(goal){
                runExp(parseInt(N),parseInt(stake),parseInt(goal));
                rl.close();
            });
        });
    });
}