import styled from 'styled-components';

const ContentContainer = (content) => {
  return (
    <Container>
      <Box>{content.content.content}</Box>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  font-weight: bolder;
  font-size: larger;
  margin: 50px;
  display: flex;
  justify-content: center;
`;
const Box = styled.div`
  background-color: #36393e;
  padding: 20px 40px 80px 40px;
  border-radius: 5px;
  width: 75%;
`;

export { ContentContainer };
