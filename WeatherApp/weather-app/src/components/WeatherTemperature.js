import React from 'react';
import WeatherIcons  from 'react-weathericons';
import PropTypes from 'prop-types'
import{CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY} from './../constants/weathers';

const stateToIconName = weatherState=>{
    switch (weatherState) {
        case CLOUD:
            return "cloud";
        case CLOUDY:
         return "cloudy";
        case SUN:
         return "day-sunny";
        case "rain":
         return RAIN;
        case SNOW:
         return "snow";
        case WINDY:
         return "day-windy";
        default:
            return "day-sunny"; 
            break;
    }
};

const getWeaterIcon = weatherState =>{

    return(<WeatherIcons name={stateToIconName(weatherState)} size="2x"></WeatherIcons>);

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