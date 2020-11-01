import todoVideo from './assets/videos/todo.mov';
import twitterCloneVideo from './assets/videos/twitter-clone.mov';
import timerVideo from './assets/videos/timer.mov';
import agencyVideo from './assets/videos/agency.mov';

import todoPoster from './assets/images/project-snippets/todo.jpg';
import twitterClonePoster from './assets/images/project-snippets/twitter-clone.jpg';
import timerPoster from './assets/images/project-snippets/timer.jpg';
import agencyPoster from './assets/images/project-snippets/agency.jpg';

const projects = [
  {
    title: 'To Do',
    projectLink: 'https://jinnn0.github.io/to-do/',
    video: todoVideo,
    poster: todoPoster,
    description:
      "I started this project to simplify some of the core features of the todo apps that I've used. Minimalistic UI was a lot of fun to create 👍🏻",
    stacks: 'React, Context API, Firebase, GSAP',
    sourceCode: 'https://github.com/jinnn0/to-do'
  },
  {
    title: 'Twitter Clone',
    projectLink: 'https://jinnn0.github.io/twitter-clone/',
    video: twitterCloneVideo,
    poster: twitterClonePoster,
    description:
      'Login/Signup functionality is crucial to any software application. Really enjoyed implementing awesome FirebaseAuth to this clone project.',
    stacks: 'React, Firebase (Auth, Firestore, Storage)',
    sourceCode: 'https://github.com/jinnn0/twitter-clone'
  },
  {
    title: 'Agency',
    projectLink: 'https://jinnn0.github.io/agency-website/',
    video: agencyVideo,
    poster: agencyPoster,
    description:
      'Inspired by an agency website at awwwards.com. GSAP was used to create the landing page animation ✔︎ ',
    stacks: 'React, GSAP',
    sourceCode: 'https://github.com/jinnn0/agency-website'
  },
  {
    title: 'Timer',
    projectLink: 'https://jinnn0.github.io/timer/',
    video: timerVideo,
    poster: timerPoster,
    description:
      'Built this app to actually use for study on daily basis 📖. Learnt a lot about Object-oriented JavaScript. ',
    stacks: 'HTML, CSS, Vanila JavaScript',
    sourceCode: 'https://github.com/jinnn0/timer'
  }
];

export default projects;
