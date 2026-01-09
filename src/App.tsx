import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import DeploymentTest from './components/Test/DeploymentTest';

function App() {
  return (
    <>
      <DeploymentTest />
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App;
// ============================================
// íº€ CI/CD TEST MARKER - DELETE AFTER TESTING
// Deployment Test: $(date)
// ============================================
