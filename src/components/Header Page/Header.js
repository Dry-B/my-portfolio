import styled from 'styled-components';
import { Link } from 'react-router-dom';
import menu from './icons/menu.png';

const Header = () => {
  return (
    <Container>
      <div>Brendan's Portfolio</div>
      <List>
        <li>
          <Link to="/projects" style={linkStyle}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
        </li>
      </List>
      <Link to="/" style={linkStyle}>
        <img src={menu} width="15px" height="15px" />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 10px;
`;
const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 300px;
  text-decoration: none;
`;

const linkStyle = {
  cursor: 'default',
  textDecoration: 'none',
  color: 'white',
};

export { Header };
