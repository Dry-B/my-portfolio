import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Canvas = () => {
  return (
    <>
      <Container>
        <Message>
          <Intro>Hi, Im Brendan.</Intro>
          <Description>A Full-Stack Web Developer.</Description>
          <Link to="/about">
            {' '}
            <AboutButton>About Me</AboutButton>
          </Link>
        </Message>
      </Container>
    </>
  );
};

const AboutButton = styled.button`
  width: 7rem;
  height: 2rem;
  margin: 1rem 0rem 6rem 0rem;
`;
const Description = styled.div`
  font-size: x-large;
`;
const Intro = styled.div`
  font-size: xx-large;
`;
const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
`;

export { Canvas };
