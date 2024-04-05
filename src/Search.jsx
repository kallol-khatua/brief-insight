import { useState } from "react";
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';

export default function Search({updateInfo}) {
    const apikey = '65c75343ef8f32e586ef50c93edc4383'
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apikey}&units=metric&q=`
    let [city, setCity] = useState("");

    
    let getWeatherInfo = async () => {
        try{
            let responce = await fetch(url + city);
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
            return result;
        }catch(err) {
            return {
                name: "City",
                temp: "--",
                humidity: "--",
                windSpeed: "--",
                description: "-- --",
                weatherMain: "--",
                sunrise: "--",
                sunset: "--"
            };
        }
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        setCity("");
        let result = await getWeatherInfo();
        updateInfo(result);
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input id="city" type="text" placeholder="Enter City" name="city" value={city} onChange={handleChange}/>
            <button id="submitBtn" type="submit"><SearchIcon id="searchIcon"/></button>
        </form>
    )
}