import maincontent from './maincontent';
import { Text } from '../Shared Components/Text';
import { Box } from '../Shared Components/Box';
import { Gallery } from '../Shared Components/Gallery';
import styled from 'styled-components';

// This component loops through the array in maincontent.js and renders the appropriate component based on type.
const Main = () => {
  return (
    <>
      {maincontent.map((content) => {
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

export { Main };
