import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import{CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY} from './../constants/weathers';

const icons = {
    [CLOUD] : 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN] : 'day-sunny',
    [RAIN] : 'rain',
    [SNOW] : 'snow',
    [WINDY]: 'windy'
};

const WeatherData = () =>(
    <div>
        <WeatherTemperature temperature={12} weatherState={SUN}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={"10m/s"}/>   
    </div>    
);
export default WeatherData;