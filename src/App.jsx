import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import GetWeatherContainer from './components/GetWeatherContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <GetWeatherContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
