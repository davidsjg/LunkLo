$(document).ready(function(){

let states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


function GetSelectedItem(){
var e = document.getElementById("dropdown");
var citySelected = e.options[e.selectedIndex].text;

console.log(citySelected)
return citySelected
}

for (let i = 0; i < states.length; i++) {
    let newA = $("<option>")
    newA.text(states[i])
    newA.val(i+1)
    newA.attr("id",i);
    $("#dropdown").append(newA)
}
// $("#stateBtn").text(citySelected)




$("#searchBtn").on("click", function(event) {
    event.preventDefault()
    

    let searchCity = $("#searchedCity").val()

    let state = GetSelectedItem()
    console.log(state)
    displayData(searchCity, state)
})

function displayData(city, state) {
var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Here we are building the URL we need to query the database
var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?" +
    "q="+ city +","+ state +"&appid=" +
    APIKey;

    console.log(queryURL)

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
    url: queryURL,
    method: "GET",
})
    .then(function (response) {
        console.log(response)
        var tempF = (response.main.temp - 273.15) * 1.8 + 32;
        $("#currCity").text("Location: " + response.name + ", " + state)
        $("#currTemp").text("Temperature: " + tempF.toFixed(1) +" F")
        $("#currHum").text("Humidity: " + response.main.humidity +"%")
        $("#currWind").text("Wind: " + response.wind.speed.toFixed(0) + " MPH")    
    })

}
})


