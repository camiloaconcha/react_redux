import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN, WINDY } from '../constants/weathers';

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/S'
};

const data2 = {
  temperature: 8,
  weatherState: WINDY,
  humidity: 20,
  wind: '23 m/S'
};
class WeatherLocation extends Component {
  constructor() {
    super();

    this.state = {
      city: 'Buenos Aires',
      data: data
    };
  }

  handleUpdateClick = () => {
    console.log('Actualizando');
    this.setState({
      city: 'Bogotá',
      data: data2
    });
  };

  render() {
    //Destructuring
    const { city, data } = this.state;
    return (
      <div className="weatherContainer">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
