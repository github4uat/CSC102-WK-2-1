  //creating a countdown function to count from 10 to 1 and then blastoff.  Note:all time units are in milliseconds.  I.E. 1000=1000milliseconds=1second.  Personal Opinion:while the us does a lot of things correctly, not adapting the metric system is not one of those things.  1 mile=5,280 feet? sure, why not
  function countDown() {
    var count = 10;
    //starting countdown at 10
    document.getElementById("countDownTimer").innerHTML = count;
    //this tells the following number to be one less than the current number
    count = count - 1;

    //then going to 9
    setTimeout(function() {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 1 from 10, and going to 9
    }, 1000);
    

    //then going to 8
    setTimeout(function() {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 2 from 10, and going to 8
    }, 2000);


    //then going to 7
    setTimeout(function() {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 3 from 10, and going to 7
    }, 3000);


    //then going to 6
    setTimeout(function() {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 4 from 10, and going to 6
    }, 4000);


    //then going to 5
    setTimeout(function() {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 5 from 10, and going to 5
    }, 5000);

    //then going to 4
    setTimeout(function() {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 6 from 10, and going to 4
    }, 6000);

    //then 3
    setTimeout(function() {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 7 from 10, and going to 3
    }, 7000);

    //then 2
    setTimeout(function() {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 8 from 10, and going to 2
    }, 8000);

    //then 1
    setTimeout(function() {
        document.getElementById("countDownTimer").innerHTML = count;
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 9 from 10, and going to 1
    }, 9000);
    

    //then Blastoff!!!
    setTimeout(function() {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!!!";
        //this tells the following number to be one less than the current number
        count = count - 1;
        //this tells computer that we're subtracting 10 from 10, and going to Blastoff!
    }, 10000);
}

function playCraps(){
    //create die1 variable
    var die1;
    //create die2 variable
    var die2;
    //variable sum
    var sum;
    //this says that Die 1's math ceiling will be 6, so it doesn't go off into infinity
    die1=Math.ceil(Math.random()*6);
    //this says that the Die 2's math ceiling will be 6, so it doesn't go off into infinity
    die2=Math.ceil(Math.random()*6);
    //we want to see the sum of die1 and die2, not subtraction or multiplication
    sum = die1 + die2;
    //die1Res=results for die1
    document.getElementById("die1Res").innerHTML = die1;
    //die2Res=results for die2
    document.getElementById("die2Res").innerHTML = die2;
    //sumRes= sum of the results, what was the result for die 1 + result for die 2
    document.getElementById("sumRes").innerHTML = sum;

   //lose sequence 7 or 11
    if(sum == 7 || sum ==11){
        document.getElementById("crapsResults").innerHTML = "Craps! You lose!";

    //win sequence double and even    
    }else if(die1 == die2 && die1%2 == 0){
        document.getElementById("crapsResults").innerHTML = "Doubles, you win!";

    //if it wasn't a win or a loss (not familiar with craps)...Not a 7 or 11 sum, and not doubles or evens
    }else {
        document.getElementById("crapsResults").innerHTML = "Push. Please try again.";
    }



}