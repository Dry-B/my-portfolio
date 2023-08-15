import styled from 'styled-components';
import { aboutcontent } from './aboutcontent';
import { Text } from '../Shared Components/Text';
import { IconAndText } from '../Shared Components/IconAndText';
import { Gallery } from '../Shared Components/Gallery';

const About = () => {
  return (
    <Container id="about">
      <Title>About Me</Title>
      <Body>
        {aboutcontent.map((content) => {
          switch (true) {
            case content.type === 'text':
              return <Text key={content.id} content={content} />;
              break;
            case content.type === 'iconandtext':
              return <IconAndText key={content.id} content={content} />;
              break;
            case content.type === 'gallery':
              return <Gallery key={content.id} content={content} />;
              break;
          }
        })}
      </Body>
    </Container>
  );
};

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Container = styled.div`
  padding-top: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: xx-large;
`;
export { About };
