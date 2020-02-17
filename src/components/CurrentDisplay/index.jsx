import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';

const CurrentDisplay = ({ temp, pressure, humidity }) => (
  <div className={styles.CurrentDisplay}>
    {`Temp:${temp}, Pressure:${pressure}, Humidity:${humidity} `}
  </div>
);

CurrentDisplay.propTypes = {
  temp: propTypes.number.isRequired,
  pressure: propTypes.number.isRequired,
  humidity: propTypes.number.isRequired,
};

export default CurrentDisplay;
