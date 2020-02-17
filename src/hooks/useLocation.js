// import { useState, useEffect } from 'react';
// import { geolocated } from 'react-geolocated';

// const useWeatherDetails = ({ isGeolocationAvailable, isGeolocationEnabled, coords }) => {
//   const [latitude, setLatitude] = useState(0);
//   const [longitude, setLongitude] = useState(0);
//   const [callComplete, setCallComplete] = useState(null);
//   useEffect(() => {
//     const someFunc = async () => {
//       try {
//         let enable = false;
//         if (!isGeolocationAvailable || !isGeolocationEnabled) {
//           enable = false;
//         }
//         if (coords) {
//           enable = true;
//         }

//         if (enable) {
//           setLatitude(coords.latitude);
//           setLongitude(coords.longitude);
//         }
//         setCallComplete(true);
//       } catch (err) {
//         setCallComplete(false);
//       }
//     };
//     someFunc();
//   }, []);
//   return [latitude, setLatitude, longitude, setLongitude, callComplete];
// };
// export default useWeatherDetails;
