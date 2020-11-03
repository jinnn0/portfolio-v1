import React, { useEffect, useRef } from 'react';

const Landing = () => {
  const typeMe = useRef();

  useEffect(() => {
    const texts = "I'd like to make things.";
    let index = 0;
    let letter = '';

    function type() {
      letter = texts.slice(0, index++);
      typeMe.current.textContent = letter;
      const timerRef = setTimeout(type, 150);

      if (letter.length === 24) {
        window.clearTimeout(timerRef);
      }
    }

    type();
  }, []);

  return (
    <div className="home">
      <div className="texts">
        <h1 data-aos="fade-right">Hey,</h1>
        <h1 data-aos="fade-right" data-aos-delay="100">
          <div className="highlight">I'm Jinyoung,</div>
        </h1>
        <h1 data-aos="fade-right" data-aos-delay="150" ref={typeMe} className="type-me">
          {}
        </h1>
      </div>

      <a href="" className="scroll">
        <div>recent projects</div>
      </a>
    </div>
  );
};

export default Landing;
