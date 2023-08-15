import { projectscontent } from './projectscontent';
import { Gallery } from '../Shared Components/Gallery';
import { Text } from '../Shared Components/Text';
import { Box } from '../Shared Components/Box';
import styled from 'styled-components';

const Projects = () => {
  return (
    <Container id="projects">
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
    </Container>
  );
};

const Container = styled.div`
  margin: 5rem;
  padding-top: 7rem;
`;

export { Projects };
