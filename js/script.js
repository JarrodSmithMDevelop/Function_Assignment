/**
 * Jarrod Smith
 * 10/20/15
 * SDI 1510 Section 1
 * Functions Assignment
 */


//Variables

var lottery = true;     //variable for prompt
var lottoNum;           //variable to store return from function with arrays
var powBall;            //variable to store the powerball number

//Functions

//Function for Florida Lottery
function flLotteryNumGen(max , min){
    var flLotto = [];

    for (var i = 0; i < 7; i++ ) {
            //Generates the numbers for the Florida Lottery
            flLotto[i] = Math.random(flLotto) * (max - min) + min;
            //Round up lotto numbers
            flLotto[i] = Math.round(flLotto[i]);

    }
    return flLotto
}

function powLotteryNumGen(max , min){
    var powLotto = [];
    for (var i = 0; i < 5; i++ ) {
            //Generates random numbers for the powerball
            powLotto[i] = Math.random() * (max - min) + min;
            //Round up lotto numbers
            powLotto[i] = Math.round(powLotto[i]);

    }
    //Returns array of numbers for the powerball lottery
    return powLotto;
}

function powerball (){
    //Variable to contain powerball number
    var powerball;
    //Number generator for the powerball number, also rounds to a whole number.
    powerball = Math.round(Math.random() * (35 - 1) + 1);
    //Returns the powerball number
    return powerball

}
//Inputs

lottery = confirm("For the Powerball number select \"OK\". For the Florida Lottery numbers select \"Cancel\"");

//Main Code

//This will display powerball lottery numbers
if (lottery === true){
    lottoNum = powLotteryNumGen(59,1);      //Calls the first 5 powerball numbers function
    powBall = powerball();                  //Calls the powerball number
    console.log("This weeks Powerball lottery numbers are " +lottoNum + " and the Powerball is " + powBall);

    //This will display Florida lottery numbers.
}else{
    lottoNum = flLotteryNumGen(53,1);                                   //Calls the florida lottery number function
    console.log("This weeks Florida lottery numbers are " +lottoNum);   //Prints the nubers to the console.
}



