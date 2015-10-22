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
function lotteryNumGen(max , min){
    var flLotto = [];
    for (var i = 0; i < 7; i++ ) {
        flLotto[i] = Math.random() * (max - min) + min;
        //Round up lotto numbers
        flLotto = Math.round(flLotto);
        console.log (flLotto)
    }
    return flLotto
}
//Inputs

lottery = confirm("For the Powerball number select \"OK\". For the Florida Lottery numbers select \"Cancel\"");

//Main Code

if (lottery === true){


}else{
    lottoNum = lotteryNumGen(53,1);
}
//Outputs

console.log(lottoNum);