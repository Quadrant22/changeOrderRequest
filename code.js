
function blastoffTimerV2(){
    // This line prints to the console on the browser only. 
    console.log("blastoffTimerV2() started");
    var countdownTimer = 10;
    // We had around 72 lines of code. In order to shorten that and be more efficiant 
    // we are going to use the 'for' loop. 
    // The variable starts from zero, it is less than 10 and increments to iterate. 
    for(var i = 0; i < 10; i = i + 1){
        //The loop moves really fast, so we need to set timeout to slow it down.
        setTimeout(function(){
        console.log("countdownTimer");
        // This line attaches the for loop to the designated area in html
        // called, "countdownStatus".
        document.getElementById("countdownStatus").innerHTML = countdownTimer;
        countdownTimer = countdownTimer - 1;
        // Timer waits 1000 miliseconds to decrement. 
        }, 1000 * i)
    }
    // If we want to print anything on a specific number we need the timeout function again
    // Then it will say BlastOff at that specific time, which is the 10th second. 
    setTimeout(function(){
        document.getElementById("countdownStatus").innerHTML = "BlastOff!!!";
        console.log("BlastOff");
    }, 10000)

    }
    
// This is another way of creating a timer. 
// Everything related to the function goes inside the {} curly brackets. 
    function blastoffTimerV3(){
        // This line prints to the console on the browser only. 
        console.log("blastoffTimerV2() started");
        //We have two variables, one that stores 10 and the other that keeps some space for the milliseconds. 
        var countdownTimer = 10;
        var stepTime = 1000;
        // Our for loop is the same except, it uses the name of the variable instead of its value. 
        // If we set countdownTimer to i < countdownTimer, the timer stops at 1. 
        // To have it go to zero it needs one extra digit, so we set i <= countdownTimer.
        for(var i = 0; i <= countdownTimer; i = i + 1){
            //The loop moves really fast, so we need to set timeout to slow it down.
            setTimeout(function(){
                console.log("countdownTimer");
                // if timer is zero print BlastOff. 
                if(countdownTimer == 0){
                    document.getElementById("countdownStatus").innerHTML = "BlastOff!!!";
                    console.log("BlastOff");
                // if there is two 'if' statements we use 'else if' instead.    
                } else if(countdownTimer < 5){
                    document.getElementById("countdownStatus").innerHTML = "Warning Less than 1/2 way to launch, time left = " + countdownTimer;
                    countdownTimer = countdownTimer - 1;
                // else doesn't have a regular bracket. 
                } else {
                    document.getElementById("countdownStatus").innerHTML = countdownTimer;
                    countdownTimer = countdownTimer - 1;
                }
            }, stepTime * i)
        }
        
}

