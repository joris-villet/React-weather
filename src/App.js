import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import WeatherForm from './components/WeatherForm';
import ButtonWeather from './components/ButtonWeather';
import Title from './components/Title';


export default function App() {

  const lang = "fr";
  const metric = "metric";
  const api_key = process.env.REACT_APP_API_KEY;

  const [weathers, setWeathers] = useState([]);
  const [cityName, setCityName] = useState("");
  const [erreur, setErreur] = useState(false);


  const setBackground = (weatherDescription) => {
    const weatherBackground = document.querySelector('.weather-image');
    console.log(weatherBackground)
    console.log(weatherDescription)
    const newBg = "url('./sun.png')";
    if (weatherDescription === "ciel dégagé") weatherBackground.style.setproperty('--bg', newBg);
  }

  const getWeather = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${metric}&appid=${api_key}&lang=${lang}`);
      const data = await response.json();
      const newData = [];
      if (data.message) {
        setErreur(true);
        setWeathers("");
        return;
      }
      console.log(data)
      newData.push(data);
      setWeathers(newData);
      setCityName("");
      setErreur(false);
      setBackground(newData[0].weather[0].description);
    }
    catch (error) {
      console.log(error);
    }
  }

  return(
    <div className="app">
      <div className="container-weather">

        <Title title="Météo React" />

        <div className="container-form">

          <WeatherForm
            cityName={cityName}
            getCity={(e) => setCityName(e.target.value)}
          />

          <ButtonWeather
            txt="Valider"
            getWeather={getWeather}
          />

        </div>

        {weathers && weathers.map((weather, index) => (
          <Weather
            key={index}
            name={weather.name}
            country={weather.sys.country}
            temperature={Number.parseFloat(weather.main.temp_max).toFixed(1)}
            description={weather.weather[0].description}
            humidity={weather.main.humidity}
            speed={weather.wind.speed}
          />
        ))}

        {erreur && (<div className="erreur">La ville n'a pas été trouvée</div>)}

        </div>
    </div>
  )
  
}


