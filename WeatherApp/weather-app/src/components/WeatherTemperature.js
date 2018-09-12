import React from 'react';
import WeatherIcons  from 'react-weathericons';
import PropTypes from 'prop-types'
import{CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY} from './../constants/weathers';

const icons = {
    [CLOUD] : 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN] : 'day-sunny',
    [RAIN] : 'rain',
    [SNOW] : 'snow',
    [WINDY]: 'windy'
};
const getWeaterIcon = weatherState =>{

    const icon = icons[weatherState];
    if(icon)
        return <WeatherIcons name={(icon)} size="2x"></WeatherIcons>;
    else
        return <WeatherIcons name={("day-sunny")} size="2x"></WeatherIcons>;
}

const WeatherTemperature = ({temperature,weatherState}) => (
  <div>
       {getWeaterIcon(weatherState)}
      <span>{`${temperature} Cº`}</span>
  </div>
);

WeatherTemperature.propTypes = {
    temperature:PropTypes.number,
    weatherState: PropTypes.string 
};
export default WeatherTemperature;