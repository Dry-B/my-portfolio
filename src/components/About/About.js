import styled from 'styled-components';
import { aboutcontent } from './aboutcontent';
import profile from './assets/profilepic.jpg';
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
  max-width: 320%;
  max-height: 320%;
  position: absolute;
  left: 6%;
  border-radius: 5px;
  z-index: 10;
`;
const TitleAndImage = styled.div`
  font-size: x-large;
  position: relative;
  margin: 0px 0px 40px 20px;
`;
export { About };
