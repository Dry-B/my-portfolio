import styled from 'styled-components';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Container id="contact">
      <Title>Contact Me </Title>
      <Form>
        <Wrapper>
          <Label>Full Name: </Label>
          <Input required />
        </Wrapper>
        <Wrapper>
          <Label>Email Address: </Label>
          <Input required type="email" />
        </Wrapper>
        <Wrapper>
          <Label>Message:</Label>
          <Input />
        </Wrapper>
        <SubmitButton whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.85 }}>
          Submit
        </SubmitButton>
      </Form>
    </Container>
  );
};

const SubmitButton = styled(motion.button)`
  width: 30%;
  max-width: 15rem;
  margin: 2rem;
  border: solid #7289da 0.3rem;
  background-color: #282b30;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  border-radius: 0.2rem;
`;
const Title = styled.div`
  font-size: x-large;
  margin-bottom: 1rem;
`;
const Wrapper = styled.div`
  margin: 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Label = styled.label`
  margin: 0 1.5rem;
`;
const Input = styled.input`
  width: 100%;
  max-width: 15rem;
  border: none;
  border-radius: 0.2rem;
  background: #282b30;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  cursor: pointer;
  outline: none;
`;
const Container = styled.div`
  justify-content: center;
  display: grid;
  text-align: center;
  padding-top: 7rem;
`;
const Form = styled.div`
  width: 100%;
  max-width: 30rem;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { Contact };
