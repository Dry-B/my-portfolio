import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const Canvas = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, x: '0' },
    to: { opacity: 1, x: '1' },
  });

  return (
    <>
      <Container>
        <Message>
          <Intro>
            Hi, Im <Me>Brendan</Me>.
          </Intro>
          <Description>A Full-Stack Web Developer.</Description>
          <ButtonContainer>
            <HashLink smooth to="/#about">
              <AboutButton
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.85 }}
              >
                About Me
              </AboutButton>
            </HashLink>
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
const AboutButton = styled(motion.button)`
  width: 7rem;
  height: 2.5rem;
  margin: 1rem 0rem 6rem 0rem;
  border: solid #7289da 0.3rem;
  background-color: #282b30;
  font-family: 'Poppins';
  font-size: inherit;
  font-weight: inherit;
  color: #dadada;
  border-radius: 0.2rem;
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
