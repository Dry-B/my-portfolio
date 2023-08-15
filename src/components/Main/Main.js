import maincontent from './maincontent';
import { Text } from '../Shared Components/Text';
import { Box } from '../Shared Components/Box';
import { Gallery } from '../Shared Components/Gallery';
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
