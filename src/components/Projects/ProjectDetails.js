import styled from 'styled-components';
import { projectscontent } from './projectscontent';
import { motion } from 'framer-motion';
import { BackDrop } from '../Shared Components/BackDrop';

const ProjectDetails = ({ handleClose, projectId }) => {
  return (
    <BackDrop onClick={handleClose}>
      <InfoContainer onClick={(e) => e.stopPropagation()}>
        <GifContainer>
          <Gif
            src={
              projectscontent[0].images.find((img) => img.id === projectId).gif
            }
          />
        </GifContainer>
        <Info>
          <InfoTitle>
            About{' '}
            {
              projectscontent[0].images.find(
                (project) => project.id === projectId
              ).name
            }{' '}
          </InfoTitle>
          <InfoBody>
            {projectscontent[0].images
              .find((img) => img.id === projectId)
              .content.map((item) => {
                return <InfoBodyParagraph>{item}</InfoBodyParagraph>;
              })}
          </InfoBody>
        </Info>
      </InfoContainer>
    </BackDrop>
  );
};
const GifContainer = styled.div`
  width: 55%;
`;
const InfoBodyParagraph = styled.div`
  margin: 20px;
`;
const Info = styled.div`
  width: 45%;
`;
const InfoContainer = styled(motion.div)`
  display: flex;
  width: clamp(50%, 700px, 90%);
  height: min(50%, 300px);
  margin: auto;
  padding: 0 2rem;
  border-radius: 1rem;
`;
const InfoTitle = styled.div`
  font-weight: bolder;
  font-size: larger;
  margin: 0px 0px 20px 30px;
`;
const InfoBody = styled.div``;
const Gif = styled.img`
  border-radius: 5px;
  width: 100%;
`;

export { ProjectDetails };
