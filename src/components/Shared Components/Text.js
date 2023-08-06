import styled from 'styled-components';

const Text = (content) => {
  return (
    <Container>
      <Title>{content.content.title}</Title>
      <Body>{content.content.content}</Body>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin: 200px 0px 200px 0px;
`;
const Title = styled.div`
  font-weight: bolder;
  font-size: larger;
`;
const Body = styled.div``;

export { Text };
