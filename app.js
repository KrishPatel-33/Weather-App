console.log("hello");
var search = document.getElementById("inputbox");
var searchbtn = document.querySelector(".searchbutton");
var image = document.querySelector(".weathericon");

async function checkweather() {
    const cityname = search.value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=184d49b1895cb02d7808de23c7ac56f1&units=metric`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".lowerpart").style.display = "none";
    }
    else {
        document.querySelector(".error").style.display = "none";

    }
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humadityy").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML = data.main.temp + "°C ";
    document.querySelector(".speedd").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Rain") {
        image.src = "./images/rain.jpg";
    }
    else if (data.weather[0].main == "Clear") {
        image.src = "./images/clear.jpg";
    }
    else if (data.weather[0].main == "Thunderstrome") {
        image.src = "./images/thunderstrome.jpg";
    }
    else if (data.weather[0].main == "Snow") {
        image.src = "./images/snow.jpg";
    }
    else if (data.weather[0].main == "Drizzle") {
        image.src = "./images/drizzle.jpg";
    }
    else {
        image.src = "./images/clouds.jpg";
    }

    document.querySelector(".lowerpart").style.display = "block";

}

searchbtn.addEventListener("click", () => {
    checkweather();
});

