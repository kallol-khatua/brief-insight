import "./Info.css"
import LightModeIcon from '@mui/icons-material/LightMode';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import WavesIcon from '@mui/icons-material/Waves';
import AirIcon from '@mui/icons-material/Air';
import Clouds from '../images/Clouds.png'
import Clear from '../images/Clear.png'
import Drizzle from '../images/Drizzle.png'
import Mist from '../images/Mist.png'
import Rain from '../images/Rain.png'
import Snow from '../images/Snow.png'

export default function Info({info}) {
    let iconStyle = {
        fontSize: 35 
    };
    
    let image = document.getElementById("mainImg");
    if(info.weatherMain == "Clear"){
        image.src = Clear;
    }else if(info.weatherMain == "Clouds"){
        image.src = Clouds;
    }else if(info.weatherMain == "Rain"){
        image.src = Rain;
    }else if(info.weatherMain == "Mist"){
        image.src = Mist;
    }else if(info.weatherMain == "Snow"){
        image.src = Snow;
    }else if(info.weatherMain == "Drizzle"){
        image.src = Drizzle;
    }
    
    return (
        <div id="container">
            <img src={Clear} id="mainImg"/>
            <h1 id="temp">{info.temp}&deg;C</h1>
            <h2 id="name">{info.name}</h2>
            <div className="center">
                <p id="desc">{info.description}</p>
            </div>
            <div className="details">
                <div className="col">
                    <WavesIcon className="icon" style={iconStyle}/>
                    <div className="humidity info">
                        <p className="humidity" id="humidity">{info.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="col">
                    <AirIcon className="icon" style={iconStyle}/>
                    <div className="wind info">
                        <p className="wind" id="wind">{info.windSpeed} km/hr</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
            <div className="setrise">
                <p id="sunrise">{info.sunrise}</p>
                <p id="sunset">{info.sunset}</p>
            </div>
            <div className="setrise bottom">
                <p>Sunrise <LightModeIcon/></p>
                <p>Sunset <WbTwilightIcon/></p> 
            </div>
        </div>
    )
}