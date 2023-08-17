import styled from 'styled-components';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Container id="contact">
      <Title>Contact Me </Title>
      <Form>
        <Input placeholder="Name" required />
        <Input placeholder="Email" required type="email" />
        <TextArea placeholder="Message" />
        <SubmitButton whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.85 }}>
          Submit
        </SubmitButton>
      </Form>
    </Container>
  );
};

const TextArea = styled.textarea`
  max-width: 20rem;
  min-width: 20rem;
  max-height: 8rem;
  min-height: 8rem;
  border: none;
  border-radius: 0.2rem;
  background: #282b30;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  cursor: pointer;
  outline: none;
  margin: 1rem;
`;
const SubmitButton = styled(motion.button)`
  width: 30%;
  max-width: 6rem;
  margin: 1rem;
  border: solid #7289da 0.3rem;
  background-color: #282b30;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  border-radius: 0.2rem;
`;
const Title = styled.div`
  font-size: xx-large;
  margin-bottom: 2rem;
`;
const Input = styled.input`
  width: 100%;
  max-width: 20rem;
  margin: 1rem;
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
  text-align: center;
  padding-top: 7rem;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { Contact };
