import { projectscontent } from './projectscontent';
import { Gallery } from '../Shared Components/Gallery';
import { IconAndText } from '../Shared Components/IconAndText';
import { Text } from '../Shared Components/Text';
import styled from 'styled-components';

const Projects = () => {
  return (
    <Container id="projects">
      <Title>Projects</Title>
      {projectscontent.map((content) => {
        switch (true) {
          case content.type === 'text':
            return <Text key={content.id} content={content} />;
            break;
          case content.type === 'box':
            return <IconAndText key={content.id} content={content} />;
            break;
          case content.type === 'gallery':
            return <Gallery key={content.id} content={content} />;
            break;
        }
      })}
    </Container>
  );
};

const Title = styled.div`
  font-size: xx-large;
`;
const Container = styled.div`
  padding-top: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export { Projects };
