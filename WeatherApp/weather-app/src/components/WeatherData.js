import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from './../constants/weathers';

const icons = {
  [CLOUD]: 'cloud',
  [CLOUDY]: 'cloudy',
  [SUN]: 'day-sunny',
  [RAIN]: 'rain',
  [SNOW]: 'snow',
  [WINDY]: 'windy'
};

const WeatherData = ({
  data: { temperature, weatherState, humidity, wind }
}) => {
  return (
    <div className="weatherData">
      <WeatherTemperature
        temperature={temperature}
        weatherState={weatherState}
      />
      <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>
  );
};
export default WeatherData;
