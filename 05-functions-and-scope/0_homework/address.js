//Create arrays
var bldg = [1234, 1900, 1634, 5432, 6789, 2124, 15657];
var street = ["Ocean Street", "Bay Street", "Vine Street", "Olympic Blvd.", "Main Street"];
var city = ["Los Angeles", "New York", "Santa Monica", "Culver City", "Hollywood"];
var state = ["CA", "NY", "FL", "CO"];
var zip = [90028, 90405, 91405, 12345];

//Define a function to select a random value
function getItem(array)
{
    return array[Math.floor(Math.random() * array.length)];
}

//Build a string
var address = "";
address += getItem(bldg) + " ";
address += getItem(street) + " ";
address += getItem(city) + ", ";
address += getItem(state) + " ";
address += getItem(zip);

//Output the string
console.log(address);