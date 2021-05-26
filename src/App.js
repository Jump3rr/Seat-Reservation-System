import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Input} from './features/firstPage/inputNumber';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Input />
      </header>
    </div>
  );
}

export default App;
