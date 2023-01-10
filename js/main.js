const key_photo = 'YAhvzPCEA7ud2jebOPfz0hrGlMjkCxTStqX-lS4oi-M'
const key_weather = '74a8cc2fd08f431fcce5495540770c98'

// get input from html form   
const form = document.querySelector('#citySearch')

//  Event Listener for text form input   
form.addEventListener("submit", ( event ) => {
    event.preventDefault();

    var city1 = document.querySelector('#city').value
    loadData(city1)    
})

// get json data from website  
const getData = async ( city3 ) => {   
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${key_weather}`) 
    return response.data
}

// Function to Weather
const loadData = async (city2) => {

    const weather = await getData(city2);

    let cityname = weather.name
    let country = weather.sys.country
    
    document.querySelector("#city_country").innerText = cityname + ', ' + country
    
    let temp = weather.main.temp
    let feelsLike = weather.main.feels_like
    let maxTemp = weather.main.temp_max
    let minTemp = weather.main.temp_min
    let humidity = weather.main.humidity
    let forecast = weather.weather[0].description
    
    document.querySelector("#temp").innerText = convert(temp) + '°F'
    document.querySelector("#feelsLike").innerText = convert(feelsLike) + '°F'
    document.querySelector("#maxTemp").innerText = convert(maxTemp) + '°F'
    document.querySelector("#minTemp").innerText = convert(minTemp) + '°F'
    document.querySelector("#humidity").innerText = humidity + '%'
    document.querySelector("#forecast").innerText = forecast       
    
    }

    // Convert Calvan to Farhenheit functon
    let convert = (energy) =>{return parseInt((energy - 273.15) * 9/5 + 32)}
