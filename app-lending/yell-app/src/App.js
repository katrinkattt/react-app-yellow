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
      <section>
        <MainContainer />
      </section>
      <section>
        <OurService />
      </section>
      <section>
        <Cards />
      </section>
      <section>
        <Skils />
      </section>
      <section>
        <Team />
      </section>
      <section>
        <Feedback />
      </section>
      <Footer />
    </div>
  );
}

export default App;
