import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeatherDetails = (latitude, longitude) => {
  const [temp, setTemp] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [callComplete, setCallComplete] = useState(null);
  useEffect(() => {
    const someFunc = async () => {
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b371a8f5f15fdcb93c9848e831a2aba4`);
        setTemp(response.data.main.temp);
        setPressure(response.data.main.pressure);
        setHumidity(response.data.main.humidity);
        setCallComplete(true);
      } catch (err) {
        setCallComplete(false);
      }
    };
    someFunc();
  }, []);
  return [temp, pressure, humidity, callComplete];
};
export default useWeatherDetails;
