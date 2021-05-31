import React from 'react';
import './App.css';
import {FirstPage} from './Components/firstPage/firstPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Seats} from './Components/seats/seats';
import {ConfirmationPage} from './Components/confirmationPage/confirmationPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact>
              <FirstPage />
            </Route>
            <Route path="/seats" exact>
              <Seats />
            </Route>
            <Route path="/confirmation" exact>
              <ConfirmationPage />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
