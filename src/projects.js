import creativeMinds from './images/project-snippets/creative-minds.svg';
import timer from './images/project-snippets/timer.svg';
import interactiveText from './images/project-snippets/interactive-text.svg';
import flappyBird from './images/project-snippets/flappy-bird.svg';
import DiveIntoTheStar from './images/project-snippets/dive-into-star.svg';

const projects = [
  {
    title: 'Creative Minds',
    projectLink: 'https://jinnn0.github.io/creative-minds/',
    img: creativeMinds,
    alt: 'creative minds snippets',
    description:
      'I started this project to make an archive of inspirational photography, articles and etc with a meaningful quotes.',
    stacks: 'HTML, CSS, Vanila JavaScript',
    sourceCode: 'https://github.com/jinnn0/creative-minds'
  },
  {
    title: 'Timer',
    projectLink: 'https://jinnn0.github.io/timer/',
    img: timer,
    alt: 'timer snippets',
    description: 'I built this simple timer to actully use to stay focused for my study',
    stacks: 'HTML, CSS, Vanila JavaScript',
    sourceCode: 'https://github.com/jinnn0/timer'
  },
  {
    title: 'Interactive Text',
    projectLink: 'https://jinnn0.github.io/interactive-text/',
    img: interactiveText,
    alt: 'Interactive text snippets',
    description:
      'This is a project I built while I was exxploring canvas. I just simply "love" these fun and user-engaging interaction ✌🏻',
    stacks: 'Vanila JavaScript, Canvas',
    sourceCode: 'https://github.com/jinnn0/interactive-text'
  },
  {
    title: 'Flappy Bird',
    projectLink: 'https://jinnn0.github.io/flappy-bird/',
    img: flappyBird,
    alt: 'flappy Bird snippets',
    description:
      "It's a clone game I built and I have to say I learnt a lot about Object-Oriented Programming as well as Modular JS",
    stacks: 'Vanila JavaScript, Canvas',
    sourceCode: 'https://github.com/jinnn0/flappy-bird'
  },
  {
    title: 'Dive Into The Stars',
    projectLink: 'https://jinnn0.github.io/dive-into-the-stars/',
    img: DiveIntoTheStar,
    alt: 'dive-into-the-stars snippets',
    description:
      'I was experiemnting with three.js and thought I would make some cool landing page animation!',
    stacks: 'Vanila JavaScript, Canvas, Three.js',
    sourceCode: 'https://github.com/jinnn0/dive-into-the-stars'
  }
];

export default projects;
