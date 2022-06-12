import React from 'react';
import Landing from './components/Landing';
import Project from './components/Project';
import About from './components/About';
import Footer from './components/Footer';
import projects from './projects';

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
