import React from 'react';
import * as styles from './index.module.css';
import Button from '../Button';


const GetWeatherContainer = () => (
  <div className={styles.GetWeatherContainer}>
    <Button testID="test-btn" text="Get Weather" />
  </div>
);

export default GetWeatherContainer;
