// Practice
// - Pass a int to our IIFE
// - Pass a function to our IIFE

var countDown = function() {
    var counter;
    for(counter = 3; counter > 0; counter--) {
        console.log(counter);
    }
}();