import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Button testID="test-btn" text="Get Weather" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
