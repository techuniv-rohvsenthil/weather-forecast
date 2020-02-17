import React, { useState } from 'react';
import * as styles from './index.module.css';
import useWeatherDetails from '../../hooks/useWeatherDetails';
import CurrentDisplay from '../CurrentDisplay';
import Carousel from '../Carousel';
import Button from '../Button';


const ViewWeatherContainer = ({ latitude, longitude }) => {
  const [temp, pressure, humidity, callComplete] = useWeatherDetails(latitude, longitude);
  if (callComplete) {
    const weatherDataList = JSON.parse(localStorage.getItem('weatherData') || '[]');
    weatherDataList.push({ temp, pressure, humidity });
    localStorage.setItem('weatherData', JSON.stringify(weatherDataList));
    return (
      <div className={styles.ViewWeatherContainer}>
        <div className={styles.Coordinates}>
          {`Showing weather forecast for Lat:${latitude}, Long:${longitude}`}
        </div>
        <CurrentDisplay temp={temp} pressure={pressure} humidity={humidity} />
        <Carousel weatherRecord={weatherDataList} />
      </div>
    );
  }
  return (<div>Loading ...</div>);
};
export default ViewWeatherContainer;
