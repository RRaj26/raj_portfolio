import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;