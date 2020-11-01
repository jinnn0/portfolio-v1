import React, { useEffect, useState } from 'react';
import './styles/style.scss';
import Landing from './components/Landing';
import Project from './components/Project';
import projects from './projects';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    let vh = windowSize.height * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className="App">
      <Landing />
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </div>
  );
}

export default App;
