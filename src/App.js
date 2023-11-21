import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home.jsx';
import Featured from './components/Featured.jsx';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Featured />
    </div>
  );
}

export default App;
