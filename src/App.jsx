import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Lost from './components/Lost';

const App = () => {
  return (
    <div className='app container'>
      <Navbar />
      <Lost />
    </div>
  );
};

export default App;
