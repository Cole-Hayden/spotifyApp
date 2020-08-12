import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { getTokenFromURL } from './spotify';

function App() {
  
  // Run code based on a given condition
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log('I HAVE A TOKEN', token);
  }, []);

  return (
    <div className="App">
      <h1>test</h1>
      <Login />
    </div>
  );
}

export default App;
