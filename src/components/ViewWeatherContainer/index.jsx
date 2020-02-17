import React from 'react';
import * as styles from './index.module.css';
import useWeatherDetails from '../../hooks/useWeatherDetails';

const ViewWeatherContainer = ({ latitude, longitude }) => {
  const [temp, pressure, humidity] = useWeatherDetails(latitude, longitude);
  return (
    <div className={styles.ViewWeatherContainer}>
      {`${latitude}, ${longitude}, ${temp}, ${pressure} `}
    </div>
  );
};
export default ViewWeatherContainer;
