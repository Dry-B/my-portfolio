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
            {content.content.images.map((image) => {
              return <Icon key={image} icon={image} style={styledIcons} />;
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
  margin-bottom: 25px;
`;
const Body = styled.div``;
const Container = styled.div`
  margin: 200px 0px 200px 0px;
  text-align: center;
`;
const styledIcons = {
  width: '80px',
  height: '80px',
  margin: '40px',
};
export { Gallery };
