import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <List>
        <ListItem>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/projects" style={linkStyle}>
            Projects
          </Link>
        </ListItem>

        <ListItem>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
        </ListItem>
      </List>
    </Container>
  );
};

const ListItem = styled.li``;
const Container = styled.div`
  margin-bottom: 80px;
  display: flex;
  justify-content: right;
  height: 3rem;
  padding: 10px;
  background: #36393e;
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 999;
`;
const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
const linkStyle = {
  textDecoration: 'none',
  color: '#dadada',
  margin: '2rem',
};

export { Header };
