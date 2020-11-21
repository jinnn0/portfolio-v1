import React, { useEffect, useState } from 'react';
import './styles/style.scss';
import Landing from './components/Landing';
import Project from './components/Project';
import projects from './projects';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Landing />
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
      <About />
      <Footer />
    </div>
  );
}

export default App;
