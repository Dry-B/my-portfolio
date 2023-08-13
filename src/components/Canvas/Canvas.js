import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Canvas = () => {
  return (
    <>
      <Container>
        <Message>
          <Intro>
            Hi, Im <Me>Brendan</Me>.
          </Intro>
          <Description>A Full-Stack Web Developer.</Description>
          <ButtonContainer>
            <Link to="/about">
              <AboutButton>About Me</AboutButton>
            </Link>
          </ButtonContainer>
        </Message>
      </Container>
    </>
  );
};

const ButtonContainer = styled.div``;
const Me = styled.span`
  color: #7289da;
`;
const AboutButton = styled.button`
  width: 7rem;
  height: 2.5rem;
  margin: 1rem 0rem 6rem 0rem;
  border: solid #7289da 3px;
  background-color: #1e2124;
  border-radius: 5px;
  color: #dadada;
  font-size: large;
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
