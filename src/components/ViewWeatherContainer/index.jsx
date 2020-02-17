import React from 'react';
import * as styles from './index.module.css';

const ViewWeatherContainer = ({ latitude, longitude }) => (
  <div className={styles.ViewWeatherContainer}>
    {`${latitude}, ${longitude}`}
  </div>
);

export default ViewWeatherContainer;
