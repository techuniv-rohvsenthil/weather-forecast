import React from 'react';
import * as styles from './index.module.css';
import useWeatherDetails from '../../hooks/useWeatherDetails';
import CurrentDisplay from '../CurrentDisplay';

const ViewWeatherContainer = ({ latitude, longitude }) => {
  const [temp, pressure, humidity] = useWeatherDetails(latitude, longitude);
  return (
    <div className={styles.ViewWeatherContainer}>
      <div className={styles.Coordinates}>
        {`Showing weather forecast for Lat:${latitude}, Long:${longitude}`}
      </div>
      <CurrentDisplay temp={temp} pressure={pressure} humidity={humidity} />
    </div>
  );
};
export default ViewWeatherContainer;
