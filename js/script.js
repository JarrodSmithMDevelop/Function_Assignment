/**
 * Jarrod Smith
 * 10/20/15
 * SDI 1510 Section 1
 * Functions Assignment
 */


//Variables

var lottery = true;
var lottoNum;

//Functions

//Function for Florida Lottery
function flLotteryNumGen(max , min){
    var flLotto = [];
    for (var i = 0; i < 7; i++ ) {

        Number(flLotto[i] = Math.random(flLotto) * (max - min) + min);
        //Round up lotto numbers
        flLotto[i] = Math.round(flLotto[i]);

    }
    return flLotto
}

function powLotteryNumGen(max , min){
    var powLotto = [];
    for (var i = 0; i < 5; i++ ) {

        powLotto[i] = Math.random() * (max - min) + min;
        //Round up lotto numbers
        powLotto[i] = Math.round(powLotto[i]);
            var powerball
            for (var ind = 0; ind = 1 ;ind++){
                powerball = Math.random() * (35 - 1) +1;
                //Round up lotto numbers
                powerball = Math.round();
            }

    }
    return powLotto
}
//Inputs

lottery = confirm("For the Powerball number select \"OK\". For the Florida Lottery numbers select \"Cancel\"");

//Main Code

if (lottery === true){
    lottoNum = powLotteryNumGen(59,1);

}else{
    lottoNum = flLotteryNumGen(10,1);
}

//Outputs

console.log(lottoNum);