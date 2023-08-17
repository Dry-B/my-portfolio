import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <Container>
      <List>
        <ListItem smooth to="#top">
          <StyledLink whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.85 }}>
            Top
          </StyledLink>
        </ListItem>
        <ListItem smooth to="/#about">
          <StyledLink whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.85 }}>
            About
          </StyledLink>
        </ListItem>
        <ListItem smooth to="/#projects">
          <StyledLink whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.85 }}>
            Projects
          </StyledLink>
        </ListItem>
        <ListItem smooth to="/#contact">
          <StyledLink whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.85 }}>
            Contact
          </StyledLink>
        </ListItem>
      </List>
    </Container>
  );
};

const ListItem = styled(HashLink)``;
const Container = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 5rem;
  background: #36393e;
  box-shadow: 1rem 2rem 4rem rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 999;
`;
const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
const StyledLink = styled(motion.button)`
  text-decoration: none;
  color: #dadada;
  margin: 0 1rem;
  font-size: large;
  background: inherit;
  border: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: #dadada;
  cursor: pointer;
  outline: none;
`;

export { Header };
