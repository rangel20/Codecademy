// This variable shows de default Kelvin temperature.
const kelvin = 293;
// The celcius variable receives the value of Kelvin - 273.
const celcius = kelvin - 273;
// This variable receives the fahrenheit equation result.
const fahrenheit = Math.floor(celcius * (9 / 5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
const newton = Math.floor(celcius * (33 / 100));
console.log(`The temperature is ${newton} degrees Newton.`);