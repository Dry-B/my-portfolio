import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectDetails } from '../Projects/ProjectDetails';

// This component takes an array of objects and returns a document of styled elements.
// Objects can contain title, content, multiple icons OR multiple images.
// If images, please create a nested array of objects with name and src.
const Gallery = (content) => {
  const [projectDetails, setprojectDetails] = useState(false);

  return (
    <Container>
      <Title>{content.content.title}</Title>
      <Text>{content.content.content}</Text>
      <ImageContainer>
        {!content.content.images ? (
          <IconList>
            {content.content.icons.map((element) => (
              <IconAndName key={element.name}>
                <Icon icon={element.src} style={styledIcons} />
                <IconName>{element.name}</IconName>
              </IconAndName>
            ))}
          </IconList>
        ) : (
          content.content.images.map((element) => (
            <ImageInfoContainer key={element.name}>
              <PlayButton
                whileHover={{ scale: 0.99 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  projectDetails
                    ? setprojectDetails(false)
                    : setprojectDetails(true)
                }
              >
                <ScreenShot src={element.src} />
                {projectDetails && (
                  <ProjectDetails
                    handleClose={setprojectDetails(false)}
                    projectId={element.id}
                  />
                )}
                <PlayButtonIcon>
                  <Icon icon="clarity:play-line" style={styledIcon} />
                </PlayButtonIcon>
              </PlayButton>
              <ImageInfo>
                <TitleAndDescription>
                  <ImageInfoTitle>{element.name}</ImageInfoTitle>
                  <ImageInfoDescription>{element.intro}</ImageInfoDescription>
                </TitleAndDescription>
              </ImageInfo>
            </ImageInfoContainer>
          ))
        )}
      </ImageContainer>
    </Container>
  );
};

const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 70%;
  max-width: 40rem;
`;
const PlayButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.5;
  background: black;
`;
const TitleAndDescription = styled.div`
  margin: 1rem;
`;
const ImageInfoDescription = styled.div``;
const ImageInfoTitle = styled.div`
  text-align: left;
  width: 100%;
  font-size: x-large;
`;
const ImageInfo = styled.div`
  width: 100%;
  max-width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const ImageInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #282b30;
  border-radius: 1rem;
  padding: 2rem;
  max-width: 70rem;
  width: 80%;
  margin: 1%;
`;
const IconAndName = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1%;
`;
const IconName = styled.div`
  margin: 1rem;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-weight: bolder;
  font-size: larger;
  margin-bottom: 1rem;
`;
const Text = styled.div`
  margin-bottom: 10rem;
`;
const Container = styled.div``;
const ScreenShot = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;
const PlayButton = styled(motion.div)`
  text-decoration: none;
  color: white;
  position: relative;
`;
const styledIcons = {
  width: '80%',
  height: '90%',
};

const styledIcon = {
  opacity: '1',
  width: '40%',
  height: '40%',
};

export { Gallery };
