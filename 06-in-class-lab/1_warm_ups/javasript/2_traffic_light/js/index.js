document.getElementById('stopButton').onclick = turnRed;
document.getElementById('slowButton').onclick = turnYellow;
document.getElementById('goButton').onclick = turnGreen;
document.getElementById('resetButton').onclick = resetLights;

//Make it so that anytime the light changes colors, it resets the lights first

function turnRed() {
 document.getElementById('stopLight').style.backgroundColor = 'red';
}

function turnYellow() {
 document.getElementById('slowLight').style.backgroundColor = 'yellow';
}

function turnGreen() {
 document.getElementById('goLight').style.backgroundColor = 'green';
}

function resetLights() {
 document.getElementById('stopLight').style.backgroundColor = 'black';
 document.getElementById('slowLight').style.backgroundColor = 'black';
 document.getElementById('goLight').style.backgroundColor = 'black';
}