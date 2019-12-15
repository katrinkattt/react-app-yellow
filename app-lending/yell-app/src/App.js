import React from 'react';
import './App.css';
import MainContainer from './components/mainContainer';
import OurService from './components/ourService';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <MainContainer />
      <OurService />
      <Cards />
    </div>
  );
}

export default App;
