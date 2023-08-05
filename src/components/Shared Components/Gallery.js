import styled from 'styled-components';
import { Icon } from '@iconify/react';

const Gallery = (content) => {
  return (
    <>
      {
        <Container>
          <Title>{content.content.title}</Title>
          <ImageContainer>
            {content.content.images.map((image) => {
              return <Icon key={image} icon={image} style={styledImages} />;
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
  text-align: center;
`;
const Container = styled.div`
  border: solid green 2px;
`;
const styledImages = {
  width: '50px',
  aspectRatio: '1/1',
};
export { Gallery };
