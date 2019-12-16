import React from 'react';
import './App.css';
import MainContainer from './components/mainContainer';
import OurService from './components/ourService';
import Cards from './components/Cards';
import Skils from './components/skils';

function App() {
  return (
    <div className="App">
      <MainContainer />
      <OurService />
      <Cards />
      <Skils />
    </div>
  );
}

export default App;
