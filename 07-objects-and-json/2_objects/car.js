var car = {
    'doors': 2,
    'color': 'black',
    'wheels': 4,
    'is_running': false,
    'is_driving': false,
    'speed': 0
}

var myCar = car;
var answer = "";

console.log("Is my car driving?");
answer = (myCar.is_driving) ? "yes":"no";
console.log(answer)

var yourCar = car;
myCar.is_driving = true;
console.log("Is YOUR car driving?");
answer = (yourCar.is_driving) ? "yes":"no";
console.log(answer)