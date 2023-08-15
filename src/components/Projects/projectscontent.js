import cookiegif from './assets/cookieclickergif.gif';
import cookieimg from './assets/cookietile.png';
import poketmonstergif from './assets/poketmonstergif.gif';
import poketmonsterimg from './assets/poketmonstertile.png';
import portfoliogif from './assets/portfoliogif.gif';
import portfolioimg from './assets/portfoliotile.png';

const projectscontent = [
  {
    id: 'projectlist',
    type: 'gallery',
    images: [
      {
        id: 'cookieclicker',
        name: 'Cookie Clicker',
        intro:
          'This project was meant to be an engaging and addictive web-based game developed using HTML, CSS, and JavaScript within a React application framework.',
        src: cookieimg,
        gif: cookiegif,
        content: [
          'The game revolves around the simple mechanic of clicking a cookie to earn more cookies, then investing in various resources to automate the cookie-making process.',
          'The game utilizes advanced JavaScript tools such as ternary operators, conditional functions, array methods, and event listeners.',
          "It uses popular react libraries like the useState hook for state management, React Router's BrowserRouter for navigation and even a custom hook to monitor intervals and automatically generate resources.",
        ],
      },
      {
        id: 'poketmonsters',
        name: 'Poket-Monsters',
        intro:
          'This project was designed to challenge the players\' reflexes. Developed using JavaScript\'s DOM manipulation and enriched with CSS styling, this game features falling "Poket-Monster" balls that players must skillfully navigate around.',
        src: poketmonsterimg,
        gif: poketmonstergif,
        content: [
          "In the game's code there is an elaborate engine using JavaScript constructors to define the properties and behaviors of the falling balls such as position, speed, and appearance.",
          "A combination of custom functions and array methods guide the descent of balls, detecting collisions with the player's character, and allowing seamless re-spawning.",
        ],
      },
      {
        id: 'portfolio',
        name: 'This Portfolio',
        intro:
          'This website was designed to showcase proficiency in various technologies and coding practices in web development, like HTML, CSS, and JavaScript with a focus on the React framework.',
        src: portfolioimg,
        gif: portfoliogif,
        content: [
          'It was created using some advanced JavaScript and React tools, such as array methods, switch case statements, ternary operators, efficient data imports, and React libraries like useState, React Router, styled components, useEffect and various third party library imports.',
          'The portfolio is designed for scalability, using a consistent set of React components across the main page, projects page, and about page. This architecture allows for easy expansion as my portfolio continues to grows.',
          "And all the site's code can be viewed publicly on GitHub.com!",
        ],
      },
    ],
  },
];
export { projectscontent };
