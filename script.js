$(document).ready(function(){




  $("#searchBtn").on("click", function(event) {
    event.preventDefault()
    console.log("SUP")
})


var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Here we are building the URL we need to query the database
var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Evergreen,Colorado&appid=" +
    APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
    url: queryURL,
    method: "GET",
})
    .then(function (response) {
        console.log(response)
        var tempF = (response.main.temp - 273.15) * 1.8 + 32;
        $("#currCity").text("City: " + response.name)
        $("#currTemp").text("Temperature: " + tempF.toFixed(1) +" F")
        $("#currHum").text("Humidity: " + response.main.humidity +"%")
        $("#currWind").text("Wind: " + response.wind.speed + " MPH")
    })


})