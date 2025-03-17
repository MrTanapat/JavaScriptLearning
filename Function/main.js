function toCelsius(fahrenheit){
    let  value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + " °C"
}

function toFahrenheit(celsius){
    let value = (celsius * 9 / 5)  + 32
    return value.toFixed(2) + " °F"
}   

function display(elementId, value){
    document.getElementById(elementId, value).innerHTML = "<b>" + value + "</b>"
}

alert(toFahrenheit(65))
display("toFahrenheit", "Fahrenheit : " + toFahrenheit(65))


alert(toCelsius(150))
display("toCelsius", "Celsius : " + toCelsius(150))