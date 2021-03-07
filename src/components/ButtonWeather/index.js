import React from 'react';
import './style.css';

export default function ButtonWeather({getWeather, txt}) {


    return(
        <div>
            <button className="btnWeather" onClick={getWeather} onKeyDown={getWeather}>{txt}</button>
        </div>
    )
}