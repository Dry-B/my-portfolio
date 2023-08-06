import styled from 'styled-components';
import { Icon } from '@iconify/react';

const Gallery = (content) => {
  return (
    <>
      {
        <Container>
          <Title>{content.content.title}</Title>
          <Body>{content.content.content}</Body>
          <ImageContainer>
            {!content.content.images
              ? content.content.icons.map((element) => {
                  return (
                    <Icon key={element} icon={element} style={styledIcons} />
                  );
                })
              : content.content.images.map((element) => {
                  return (
                    <div key={element.name}>
                      <div>{element.name}</div>
                      <ScreenShot src={element.src} />
                    </div>
                  );
                })}
          </ImageContainer>
        </Container>
      }
    </>
  );
};

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.div`
  font-weight: bolder;
  font-size: larger;
  margin-bottom: 10px;
`;
const Body = styled.div`
  margin-bottom: 10px;
`;
const Container = styled.div`
  margin: 20px 20px 300px 20px;
  text-align: center;
`;
const ScreenShot = styled.img`
  max-width: 80%;
`;
const styledIcons = {
  width: '80px',
  height: '80px',
  margin: '40px',
};
export { Gallery };
