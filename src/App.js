import React from 'react';
import logo from './logo.svg';
import './App.css';
import LiveGame from './containers/LiveGame';

// const showMe = (newFigure) => {
//   alert(newFigure);
//   console.log(newFigure.input.value);
// };

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <LiveGame />
  </div>
);

export default App;
