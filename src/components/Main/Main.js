import maincontent from './maincontent';
import { About } from '../About/About';
import { Projects } from '../Projects/Projects';
import { Contact } from '../Contact/Contact';

const Main = () => {
  return (
    <>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export { Main };
