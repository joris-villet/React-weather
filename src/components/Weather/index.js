
import './index.css';


export default function Weather({
    name,
    country,
    description,
    temperature,
    humidity,
    speed
}) {
   


    return (
        <div>
            <div className="weather">
                <div className="weather-container-country">
                    <h1 className="weather-name">{name}</h1>
                    <p className="weather-country">{country}</p>
                    <div className="weather-image"></div>
                </div>
                <p className="weather-temp">{temperature}°</p>
                <p className="weather-description">{description}</p>
                <p className="weather-humidity">Taux d'humidité {humidity} %</p>
                <p className="weather-speed">Vent {speed} km/h</p>
            </div>
        </div>
    );
}