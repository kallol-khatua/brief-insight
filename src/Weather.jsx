import { useState, useEffect } from "react";
import "./Weather.css"
import Search from "./Search";

export default function Weather() {
    let [info, setInfo] = useState({});
     
    let updateInfo = (result) => {
        setInfo(result);
    }
    
    console.log(info)

    // useEffect(() => {
    //     async function getWeather() {
    //         let response = await fetch()
    //     }
    // })

    return (
        <div className="Weather">

            <Search updateInfo={updateInfo}/>
            {/* <div>
                <h1 id="temp">{info.temp}</h1>
                <h2 id="name">{info.name}</h2>
                <div className="center">
                    <p id="desc">{info.description}</p>
                </div>
            
                <div className="details">
                    <div className="col">
                        <div>
                            <p className="humidity" id="humidity">{info.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <p className="wind" id="wind">{info.windSpeed}km/hr</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
        
                </div>
                <div className="setrise">
                    <p id="sunrise">{info.sunrise}</p>
                    <p id="sunset">{info.sunset}</p>
                </div>
            </div> */}
        </div>
    )
}