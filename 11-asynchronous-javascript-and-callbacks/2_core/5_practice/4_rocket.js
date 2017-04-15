// PART ONE
// Get the code below to work:

var blastOff = function() {
    console.log("Blasting off!");
}

function launchRocket(rocketName, blastOffCallback) {
    console.log("Launching " + rocketName);
    console.log("3... 2... 1...");
    // Run blastOffCallback function here
}

launchRocket("Viking", blastOff);

// When working it should output the following to the console:
// => Launching Viking
// => 3... 2... 1...
// => Blasting off!```

// PART TWO
// Once you have the above code working. Uncomment the code below
// and get it working:

/*
var blastOff = function(person) {
    console.log("Blasting off, " + person + "!!!");
}

function launchRocket(rocketName, blastOffCallback) {
    console.log("Launching " + rocketName);
    console.log("3... 2... 1...");
    // Run blastOffCallback function here that passes a person's name into it
}

launchRocket("Viking", blastOff);

// When working it should output something similar to the following in the console:
// => Launching Viking
// => 3... 2... 1...
// => Blasting off, Jonathan!!!
*/