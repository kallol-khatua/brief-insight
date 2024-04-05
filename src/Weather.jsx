import { useState, useEffect } from "react";
import "./Weather.css"
import Search from "./Search";
import Info from "./Info.jsx";

export default function Weather() {
    let [info, setInfo] = useState({
        name: "City",
        temp: "--",
        humidity: "--",
        windSpeed: "--",
        description: "-- --",
        weatherMain: "--",
        sunrise: "--",
        sunset: "--"
    });
     
    let updateInfo = (result) => {
        setInfo(result);
    }

    useEffect(() => {
        async function getWeather() {
            const apikey = '65c75343ef8f32e586ef50c93edc4383'
            let responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apikey}&units=metric&q=Ludhiana`);
            let data = await responce.json();

            let option = {hour: '2-digit',minute:'2-digit'};
            let unix_timestamp = data.sys.sunrise;
            let date = new Date(unix_timestamp * 1000);
            let sunrise = date.toLocaleTimeString(navigator.language,option);
            unix_timestamp = data.sys.sunset;
            date = new Date(unix_timestamp * 1000);
            let sunset = date.toLocaleTimeString(navigator.language,option);
            let result = {
                name: data.name,
                temp: Math.round(data.main.temp),
                humidity: data.main.humidity,
                windSpeed: Math.round(data.wind.speed * 3.6),
                description: data.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                weatherMain: data.weather[0].main,
                sunrise: sunrise,
                sunset: sunset
            };
            setInfo(result);
        }
        getWeather();
    }, []);

    return (
        <div className="Weather">
            <Search updateInfo={updateInfo}/>
            <Info info={info}/>
        </div>
    )
}