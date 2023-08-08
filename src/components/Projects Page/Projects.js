import { projectscontent } from './projectscontent';
import { Gallery } from '../Shared Components/Gallery';
import { Text } from '../Shared Components/Text';
import { Box } from '../Shared Components/Box';

// This component loops through the array in projectcontent.js and renders the appropriate component based on type.
const Projects = () => {
  return (
    <>
      {projectscontent.map((content) => {
        switch (true) {
          case content.type === 'text':
            return <Text key={content.id} content={content} />;
            break;
          case content.type === 'box':
            return <Box key={content.id} content={content} />;
            break;
          case content.type === 'gallery':
            return <Gallery key={content.id} content={content} />;
            break;
        }
      })}
    </>
  );
};

export { Projects };
