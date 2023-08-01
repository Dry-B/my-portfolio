import './styles/App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';

const App = () => {
  return (
    <Body>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={'Content'} />
          <Route path="/about" element={'<AboutScreen />'} />
        </Routes>
      </Router>
    </Body>
  );
};

const Body = styled.div`
  color: white;
  background-color: #00000f;
  height: 100vh;
  font-family: 'Poppins';
`;

export default App;
