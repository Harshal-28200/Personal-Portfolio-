import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Features from './components/Skills/Features';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BottomFooter from './components/Footer/BottomFooter';
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div class="max-w-screen-xl mx-auto px-3">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        <BottomFooter />
      </div>
    </div>
  ); 
}

export default App;
