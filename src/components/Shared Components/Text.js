import styled from 'styled-components';

// This component takes an array of objects and returns a document of styled elements.
// Objects can contain title and content.
const Text = (content) => {
  return (
    <Container>
      <Title>{content.content.title}</Title>
      <Body>{content.content.content}</Body>
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
`;
const Title = styled.div`
  font-weight: bolder;
  font-size: larger;
`;
const Body = styled.div``;

export { Text };
