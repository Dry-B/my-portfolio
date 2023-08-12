import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <Title>Contact Me</Title>
      <Form>
        <Wrapper>
          <Label>Full Name:</Label>
          <Input required />
        </Wrapper>
        <Wrapper>
          <Label>Email Address:</Label>
          <Input required type="email" />
        </Wrapper>
        <Wrapper>
          <Label>Message:</Label>
          <Input />
        </Wrapper>
      </Form>
    </Container>
  );
};
const Title = styled.div`
  font-size: x-large;
  margin-bottom: 1rem;
`;
const Wrapper = styled.div`
  margin: 1rem;
`;
const Label = styled.label``;
const Input = styled.input`
  width: 210px;
  border-radius: 3px;
`;
const Container = styled.div`
  justify-content: center;
  display: grid;
  text-align: center;
`;
const Form = styled.div`
  width: 110%;
  text-align: right;
`;

export { Contact };