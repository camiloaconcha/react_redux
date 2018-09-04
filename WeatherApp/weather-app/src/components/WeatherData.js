import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';



const WeatherData = () =>(
    <div>
        <WeatherTemperature temperature={14}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={"10m/s"}/>   
    </div>    
);
export default WeatherData;