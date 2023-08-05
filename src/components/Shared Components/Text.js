import styled from 'styled-components';

const Text = (text) => {
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
  margin: 130px;
`;

export { Text };
