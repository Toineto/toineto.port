import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

function MainPage() {
  return(
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default MainPage;