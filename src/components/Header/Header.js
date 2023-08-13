import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <Container>
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
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 10px;
  position: relative;
  border-bottom: solid #dadada 1px;
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
  textDecoration: 'none',
  color: '#dadada',
};
const iconStyle = {
  width: '15px',
  aspectRatio: '1/1',
  paddingTop: '5px',
};

export { Header };
