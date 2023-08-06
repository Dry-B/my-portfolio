import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <Container>
      <Link to="/" style={linkStyle}>
        Brendan's Portfolio
      </Link>
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
        <Icon icon="ion:menu" style={iconStyle} />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 200px;
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 10px;
  position: relative;
`;
const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 300px;
  text-decoration: none;
  position: absolute;
  left: 40%;
`;
const linkStyle = {
  cursor: 'default',
  textDecoration: 'none',
  color: 'white',
};
const iconStyle = {
  width: '15px',
  aspectRatio: '1/1',
  paddingTop: '5px',
};

export { Header };
