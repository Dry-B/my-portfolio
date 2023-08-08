import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

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
                    <Link
                      to={`/projects/${element.id}`}
                      key={element.name}
                      style={styledLink}
                    >
                      <div>{element.name}</div>
                      <ScreenShot src={element.src} />
                    </Link>
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
  border-radius: 5px;
`;
const styledIcons = {
  width: '80px',
  height: '80px',
  margin: '40px',
};
const styledLink = {
  textDecoration: 'none',
  color: 'white',
};
export { Gallery };
