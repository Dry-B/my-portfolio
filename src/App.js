import './styles/App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header Page/Header';
import { Main } from './components/Main Page/Main';
import { About } from './components/About Page/About';
import { Projects } from './components/Projects Page/Projects';
import { Contact } from './components/Contact Page/Contact';

const App = () => {
  return (
    <Body>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Body>
  );
};

const Body = styled.div`
  /* global styles */
  color: white;
  height: 100vh;
  font-family: 'Poppins';
`;

export default App;
