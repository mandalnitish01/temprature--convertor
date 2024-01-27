/*
const inputbox = document.getElementById("inputbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const submit = document.getElementById("submit");

let temp;

function convert() {
  if (toFahrenheit.checkVisibility) {
    temp = parseFloat(inputbox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } 
  else if (toCelsius.checkVisibility) {
    temp = parseFloat(inputbox.value);
    temp = ((temp - 32) * 5) / 9;
    result.textContent = temp.toFixed(1) + "°C";
  } 
  else {
    result.textContent = "Select the unit to convert";
  }
}
*/


const inputbox = document.getElementById('inputbox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');


function convert() {
  temp = parseFloat(inputbox.value);

  if (toFahrenheit.checked) {
    temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (toCelsius.checked) {
    temp = (temp - 32) * 5 / 9;
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = "Select the unit to convert";
  }
}
