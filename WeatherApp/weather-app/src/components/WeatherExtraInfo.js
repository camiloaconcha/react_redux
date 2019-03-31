import React from 'react';

const WeatherExtraInfo = ({ humidity,wind }) => (
    <div className="extraInfo">
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);
export default WeatherExtraInfo;