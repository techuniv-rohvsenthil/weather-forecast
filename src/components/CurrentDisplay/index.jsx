import React from 'react';
import * as styles from './index.module.css';

const CurrentDisplay = ({ temp, pressure, humidity }) => (
  <div className={styles.CurrentDisplay}>
    {`Temp:${temp}, Pressure:${pressure}, Humidity:${humidity} `}
  </div>
);
export default CurrentDisplay;
