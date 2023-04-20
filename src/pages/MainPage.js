import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from "../components/Contact"

const MainPage = () => (
  <div>
    <Header />
    <Home />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </div>
)

export default MainPage;