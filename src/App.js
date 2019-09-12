import React from 'react';

import Section01 from './components/section01-component/Section01';
import Section02 from "./components/section02-component/Section02";
import Footer from "./components/footer-component/Footer";





function App() {
  return (
      <div className="App">
        <Section01/>
          <Section02/>
        <Footer/>
      </div>
  );
}

export default App;
