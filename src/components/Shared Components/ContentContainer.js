import styled from 'styled-components';

const ContentContainer = (content) => {
  return (
    <Container>
      <Box>
        <Title>{content.content.title}</Title>
        <Text>{content.content.content}</Text>
      </Box>
    </Container>
  );
};

const Title = styled.div`
  background-color: #36393e;
  font-weight: bolder;
  font-size: larger;
  margin-bottom: 25px;
`;
const Text = styled.div`
  background-color: #36393e;
`;
const Container = styled.div`
  text-align: center;
  margin: 50px;
  display: flex;
  justify-content: center;
`;
const Box = styled.div`
  background-color: #36393e;
  padding: 20px 40px 30px 40px;
  border-radius: 5px;
  width: 75%;
`;

export { ContentContainer };
