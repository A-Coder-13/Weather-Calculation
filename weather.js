const city_name = document.getElementById("cityInput")
document.getElementById("fetchWeatherBtn").addEventListener("click", async () => {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&appid=aca0ef7bc95dfbbadb9d1e232281e70e`)
    const weather = await data.json()
    console.log(weather)

    if (weather.cod == 200) {

        document.getElementById("weatherResult").innerHTML = `
        <p class="city-name" id="cityNameDisplay">${weather.name}</p>

        <div class="weather-item">
            <span class="label"><span class="icon">🌡️</span> Current Temperature:</span>
            <span class="value" id="tempValue">${(weather.main.temp-273.15).toFixed(1)} °C</span>
        </div>

        <div class="weather-item">
            <span class="label"><span class="icon">☁️</span> Weather Description:</span>
            <div>
            <span class="value" id="descriptionValue">${weather.weather.map(w => w.description)}</span>
            <span class="value" id="descriptionimg"> </span>
            </div>
        </div>
        <div class="weather-item">
            <span class="label"><span class="icon">💧</span> Humidity:</span>
            <span class="value" id="humidityValue">${weather.main.humidity} %</span>
            </div>
            <div class="weather-item">
                <span class="label"><span class="icon">💨</span> Wind Speed:</span>
                <span class="value" id="windSpeedValue">${weather.wind.speed} m/s</span>
                </div>
                `
    } else {
        document.getElementById("weatherResult").innerHTML = `
        <h3>No such Weather is available</h3>
        `
    }


    const weatherdesc = weather.weather.map(w => w.description)
    console.log(weatherdesc)
    let img = document.createElement("img")
    if (weatherdesc == "haze") {
        let src = img.setAttribute("src", "img/haze.png")
    } else if (weatherdesc == "overcast cloud") {
        let src = img.setAttribute("src", "img/overcast cloud.png")
    } else if (weatherdesc == "rainy") {
        let src = img.setAttribute("src", "img/rainy.png")
    } else if (weatherdesc == "smoke") {
        let src = img.setAttribute("src", "img/smoke.png")
    } else if (weatherdesc == "clear sky") {
        let src = img.setAttribute("src", "img/clear sky.png")
    } else {
        let src = img.setAttribute("src", "img/sunny.png")
    }
    document.getElementById("descriptionimg").append(img)
})