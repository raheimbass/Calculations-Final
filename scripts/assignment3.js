//start: The temperature in number.
//Scale: a C for Celsius and an F for Fahrenheit.

function convertTemperature(temp, scale) {
    for (let value = start' va;ie > end; value++) 
    //If the scale is Celsius or, in other words, if we get a C...
    if (scale == "C") {
        //convert the temperature to Fahrenheit using the formula: Fahrenheit = (Celsius * 9/5) + 32
        let convertedTemp = (temp * 9/5) + 32;
        //Display the converted temperature in the console.
        console.log(convertedTemp);
        //If the scale is not Celsius, but if the scale is Fahrenheit (or if we get an F)...
    } else if (scale == "F") {
        //convert the temperature to Celsius using the formula Celsius = (Farenheit - 32) * 5/9.
        let convertedTemp = (temp -32) * 5/9;
        //Display ther converted temperature in the console.
        console.log(convertedTemp);
        //So we do not get an F or C, in another case...
    } else {
        //ASk for a valid scale
        console.log("Add a valid Scale: C or F.");
    }
}


//Call the function

//nameOfTheFunction(number, string);
let t = prompt("Enter temperature:");
let s = prompt("Enter the scale:");
convertTemperature(t, s);

convertTemperature(50, "F");

convertTemperature(1, "C");
convertTemperature(2, "C");
convertTemperature(3, "C");
convertTemperature(4, "D");