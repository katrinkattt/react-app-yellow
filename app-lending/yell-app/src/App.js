import React from 'react';
import MainContainer from './components/mainContainer';
import OurService from './components/ourService';
import Cards from './components/Cards';
import Skils from './components/skils';
import Team from './components/team';
import Feedback from './components/fedback';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <MainContainer />
      <OurService />
      <Cards />
      <Skils />
      <Team />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
