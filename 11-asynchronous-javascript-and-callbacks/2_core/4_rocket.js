// This is a function expression
var blastOff = function() {
    console.log("Blasting off!");
}

// This is a higher order named function declaration
function launchRocket(rocketName, blastOffCallback) {
    console.log("Launching " + rocketName);
    console.log("3... 2... 1...");
    blastOffCallback();
}

// This is where the function is being executed/triggered
launchRocket("Viking", blastOff);

// => Launching Viking
// => 3... 2... 1...
// => Blasting off!