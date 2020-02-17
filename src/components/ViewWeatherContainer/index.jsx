import React, { useState } from 'react';
import * as styles from './index.module.css';
import useWeatherDetails from '../../hooks/useWeatherDetails';
import CurrentDisplay from '../CurrentDisplay';
import Carousel from '../Carousel';
import Button from '../Button';


const ViewWeatherContainer = ({ latitude, longitude }) => {
  const [temp, pressure, humidity] = useWeatherDetails(latitude, longitude);
  const [weatherRecord, setWeatherRecord] = useState([{ temp: 50, pressure: 50, humidity: 50 }]);
  return (
    <div className={styles.ViewWeatherContainer}>
      <div className={styles.Coordinates}>
        {`Showing weather forecast for Lat:${latitude}, Long:${longitude}`}
      </div>
      <CurrentDisplay temp={temp} pressure={pressure} humidity={humidity} />
      <Carousel weatherRecord={weatherRecord} />
      <Button testID="new-data-btn" text="Get New Data" />
    </div>
  );
};
export default ViewWeatherContainer;
