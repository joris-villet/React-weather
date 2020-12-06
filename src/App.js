
import React from 'react';
import { useState } from 'react';
import './App.css';

export default function App() {

  
  const cityName = "saint-dizier";
  const lang = "fr";
  const metric = "metric"
  const api_key = 'b2410b16c45665306028d71d390884b6';
  
  const [weathers, setWeathers] = useState([]);
  
  const getWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${metric}&appid=${api_key}&lang=${lang} `);
      const data = await response.json();
      const newData = [];
      newData.push(data);
      setWeathers(newData)
    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="App">

      <header className="App-header"></header>


      {weathers && weathers.map((weather, index) => (
        <div key={index}>
          <h1 className="title">{weather.name}</h1>
          <p>{weather.sys.country}</p>
          <p>Taux d'humidité {weather.main.humidity} %</p>
          <p>Vent {weather.wind.speed} km/h</p>
          <p className="info">{weather.weather[0].description}</p>
          
          <p>Température : <span>{weather.main.temp_max} °</span></p>
        </div>
      ))}

      {console.log("type de weather", weathers)}
      

      {/* {!weathers && (<div>...loading</div>)} */}

      <button onClick={getWeather}>get weather</button>
        
    </div>
  );
}


