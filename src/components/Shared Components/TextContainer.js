import styled from 'styled-components';

const TextContainer = (text) => {
  return (
    <>
      <Container>{text.text.content}</Container>
    </>
  );
};

const Container = styled.div`
  text-align: center;
  font-weight: bolder;
  font-size: larger;
  margin: 50px;
`;

export { TextContainer };
