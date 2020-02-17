import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import GetWeatherContainer from './components/GetWeatherContainer';
import ViewWeatherContainer from './components/ViewWeatherContainer';

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <GetWeatherContainer setLatitude={setLatitude} setLongitude={setLongitude} />
          </Route>
          <Route exact path="/view">
            <ViewWeatherContainer latitude={latitude} longitude={longitude} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
