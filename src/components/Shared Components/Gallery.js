import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

// This component takes an array of objects and returns a document of styled elements.
// Objects can contain title, content, multiple icons OR multiple images.
// If images, please create a nested array of objects with name and src.
const Gallery = (content) => {
  return (
    <Container>
      <Title>{content.content.title}</Title>
      <Text>{content.content.content}</Text>
      <ImageContainer>
        {!content.content.images
          ? content.content.icons.map((element) => {
              return (
                <IconList>
                  <IconAndName>
                    <Icon
                      key={element.name}
                      icon={element.src}
                      style={styledIcons}
                    />
                    <IconName>{element.name}</IconName>
                  </IconAndName>
                </IconList>
              );
            })
          : content.content.images.map((element) => {
              return (
                <ImageInfoContainer>
                  <Link
                    to={`/projects/${element.id}`}
                    key={element.name}
                    style={styledLink}
                  >
                    <ScreenShot src={element.src} />
                  </Link>
                  <ImageInfo>
                    <TitleAndDescription>
                      <ImageInfoTitle>{element.name}</ImageInfoTitle>
                      <ImageInfoDescription>
                        {element.intro}
                      </ImageInfoDescription>
                    </TitleAndDescription>
                    <PlayButton>
                      <Icon icon="clarity:play-line" />
                    </PlayButton>
                  </ImageInfo>
                </ImageInfoContainer>
              );
            })}
      </ImageContainer>
    </Container>
  );
};

const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const PlayButton = styled.div`
  text-align: left;
  width: 100%;
  margin: 1rem;
  font-size: larger;
`;
const TitleAndDescription = styled.div``;
const ImageInfoDescription = styled.div``;
const ImageInfoTitle = styled.div`
  text-align: left;
  width: 100%;
  font-size: x-large;
`;
const ImageInfo = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const ImageInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 5rem;
  background: #282b30;
  border-radius: 1rem;
  padding: 2rem;
  min-width: 75rem;
`;
const IconAndName = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  padding: 1rem;
`;
const IconName = styled.div`
  margin: 1rem;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 40rem;
`;
const Title = styled.div`
  font-weight: bolder;
  font-size: larger;
  margin-bottom: 10px;
`;
const Text = styled.div`
  margin-bottom: 10px;
`;
const Container = styled.div``;
const ScreenShot = styled.img`
  width: 40rem;
  border-radius: 5px;
`;
const styledIcons = {
  width: '80px',
  height: '80px',
};
const styledLink = {
  textDecoration: 'none',
  color: 'white',
};
export { Gallery };
