import React from 'react'
import logo from './logo.svg';
import './App.css';
import Gpay from './Components/Gpay'

function App() {
  return (
    <div className="App">
      <h1><img src={logo} className="App-logo" alt="logo" /> Google Pay React App</h1>
      <hr/>
      <Gpay amount="1" />
    </div>
  );
}

export default App;
