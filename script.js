

let key = "69b531a6cfe7e559bf9c71dda89be4c4"


function screenData(data) {
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".text-weather").innerHTML = data.weather[0].description
    document.querySelector(".text-humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".img-weather").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    
} 

async function srchCity(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response=> response.json())

    screenData(data)
}

function btnclick() {
    const city = document.querySelector(".input-city").value
    
    srchCity(city)
}

