let winningNumber = 19;
let guess = prompt("Guess a Number: ");
if(guess<winningNumber){
    console.log("too low");
}
else if(guess>winningNumber){
    console.log("too high");
}
else if(guess==winningNumber){
    console.log("you guessed it right!");
}
else{
    console.log("I don't now what are you saying so Fuck Off with all due respect")
}
