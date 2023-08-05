import styled from 'styled-components';
import { aboutcontent } from './aboutcontent';
import profile from './images/cat.jpg';
import { Text } from '../Shared Components/Text';
import { Box } from '../Shared Components/Box';
import { Gallery } from '../Shared Components/Gallery';

const About = () => {
  return (
    <>
      <TitleAndImage>
        <Title>About Me</Title>
        <ProfileImage src={profile} />
      </TitleAndImage>
      {aboutcontent.map((content) => {
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

const Title = styled.div`
  margin-left: 6%;
`;
const ProfileImage = styled.img`
  width: 10%;
  position: absolute;
  left: 6%;
  border-radius: 5px;
`;
const TitleAndImage = styled.div`
  font-size: x-large;
  position: relative;
`;
export { About };
