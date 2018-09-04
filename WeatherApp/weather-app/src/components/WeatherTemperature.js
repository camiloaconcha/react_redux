import React from 'react';
import WeatherIcons  from 'react-weathericons';







const stateToIconName = weatherState=>{
    switch (weatherState) {
        case "cloud":
            return "cloud";
        case "cloudy":
         return "cloudy";
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

export default WeatherTemperature;