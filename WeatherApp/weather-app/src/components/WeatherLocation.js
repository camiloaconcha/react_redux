import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from '../constants/weathers';


const data = {
    temperature: 5,
    weatherState: SUN,
    humidity:10,
    wind:'10 m/S'
}
const WeatherLocation = () => (
    <div className="weatherContainer">
        <Location city={"Bogota"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);

export default WeatherLocation;
