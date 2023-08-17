import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <Container>
      <List>
        <ListItem>
          <StyledLink smooth to="#top">
            Top
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink smooth to="/#about">
            About
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink smooth to="/#projects">
            Projects
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink smooth to="/#contact">
            Contact
          </StyledLink>
        </ListItem>
      </List>
    </Container>
  );
};

const ListItem = styled.li``;
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
const StyledLink = styled(HashLink)`
  text-decoration: none;
  color: #dadada;
  margin: 0 1rem;
`;

export { Header };
