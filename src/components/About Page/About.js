import styled from 'styled-components';
import { aboutcontent } from './aboutcontent';
import profile from './images/cat.jpg';
import { ContentContainer } from '../Shared Components/ContentContainer';

const About = () => {
  return (
    <>
      <TitleAndImage>
        <div>About Me</div>
        <ProfileImage src={profile} />
      </TitleAndImage>
      {aboutcontent.map((content) => {
        return content.type === 'text' ? null : (
          <ContentContainer key={content.id} content={content} />
        );
      })}
    </>
  );
};

const ProfileImage = styled.img`
  width: 15%;
  position: absolute;
  left: 6%;
  border-radius: 5px;
`;
const TitleAndImage = styled.div`
  font-size: x-large;
  position: relative;
`;
export { About };
