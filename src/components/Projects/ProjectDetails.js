import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { projectscontent } from './projectscontent';
import { Icon } from '@iconify/react';

const ProjectDetails = () => {
  const { projectId } = useParams();

  return (
    <>
      <TitleandReturn>
        <Link to={`/projects`}>
          <Icon
            icon="icon-park-outline:return"
            color="#dadada"
            style={returnStyle}
          />
        </Link>
        <PageTitle>Project Details</PageTitle>
      </TitleandReturn>
      <InfoContainer>
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
    </>
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
const PageTitle = styled.div`
  font-size: x-large;
`;
const TitleandReturn = styled.div`
  display: flex;
  justify-content: left;
  margin: 0px 20px 20px 20px;
`;
const InfoContainer = styled.div`
  display: flex;
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
const returnStyle = {
  padding: '10px',
};

export { ProjectDetails };
