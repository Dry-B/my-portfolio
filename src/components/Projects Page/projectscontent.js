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
    title: "Here are some projects I've created:",
    content: 'Click one for more details!',
    images: [
      {
        id: 'cookieclicker',
        name: 'Cookie Clicker',
        src: cookieimg,
        gif: cookiegif,
      },
      {
        id: 'poketmonsters',
        name: 'Poket-Monsters',
        src: poketmonsterimg,
        gif: poketmonstergif,
      },
      {
        id: 'portfolio',
        name: 'This Portfolio',
        src: portfolioimg,
        gif: portfoliogif,
      },
    ],
  },
];
export { projectscontent };
