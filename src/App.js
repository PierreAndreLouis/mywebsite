import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home_page from './components/Home_page/Home_page';
import "./App.css"
import About from './components/About_page/About';
import Navbar from './components/Navbar/NavBar1'
import Portfolio from './components/Portfolio/Portfolio';
import Contact_page from './components/Contact_page/Contact_page';
import Footer1 from './components/Footer1/Footer1'






function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home_page />} />
        <Route exact path='/portfolio' element={<Home_page />} />

        <Route exact path='/About' element={<About />} />
        <Route exact path='/Projects' element={<Portfolio />} />
        <Route exact path='/Contact' element={<Contact_page />} />

      </Routes>
      <Footer1 />



    </div>
  );
}

export default App;
