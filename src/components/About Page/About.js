import styled from 'styled-components';
import { aboutcontent } from './aboutcontent';
import profile from './images/cat.jpg';
import { Box } from '../Shared Components/Box';

const About = () => {
  return (
    <>
      <TitleAndImage>
        <Title>About Me</Title>
        <ProfileImage src={profile} />
      </TitleAndImage>
      {aboutcontent.map((content) => {
        return content.type === 'text' ? null : (
          <Box key={content.id} content={content} />
        );
      })}
    </>
  );
};

const Title = styled.div`
margin-left:6%;
`
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
