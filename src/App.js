import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {FirstPage} from './features/firstPage/firstPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Seats} from './features/seats/seats';

function App() {
  return (
    <Router>
      {/* <Counter /> */}
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
              <FirstPage />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
