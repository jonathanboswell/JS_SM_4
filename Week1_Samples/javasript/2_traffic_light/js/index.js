document.getElementById('stopButton').onclick = turnRed;
document.getElementById('slowButton').onclick = turnYellow;
document.getElementById('goButton').onclick = turnGreen;
document.getElementById('resetButton').onclick = resetLights;

function turnRed() {
 resetLights();
 document.getElementById('stopLight').style.backgroundColor = 'red';
 //document.getElementById('stopButton').innerHTML = 'hi there';
}

function turnYellow() {
 resetLights();    
 document.getElementById('slowLight').style.backgroundColor = 'yellow';
}

function turnGreen() {
 resetLights();    
 document.getElementById('goLight').style.backgroundColor = 'green';
}

function resetLights() {
 document.getElementById('stopLight').style.backgroundColor = 'black';
 document.getElementById('slowLight').style.backgroundColor = 'black';
 document.getElementById('goLight').style.backgroundColor = 'black';
}