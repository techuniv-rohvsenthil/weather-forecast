import React from 'react';
import { geolocated } from 'react-geolocated';
import { Link } from 'react-router-dom';
import * as styles from './index.module.css';
import Button from '../Button';

const GetWeatherContainer = ({
  isGeolocationAvailable, isGeolocationEnabled, coords, setLatitude, setLongitude,
}) => {
  let enable = false;
  if (!isGeolocationAvailable || !isGeolocationEnabled) {
    enable = false;
    return <div>CANNOT ACCESS THE CURRENT CORDS</div>;
  }
  if (coords) {
    enable = true;
  }

  if (enable) {
    setLatitude(coords.latitude);
    setLongitude(coords.longitude);
    localStorage.setItem('latitude', coords.latitude);
    localStorage.setItem('longitude', coords.longitude);
  }

  return (
    <div className={styles.GetWeatherContainer}>
      <Link to="/view">
        <Button testID="test-btn" text="Get Weather" />
      </Link>
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000000,
})(GetWeatherContainer);
