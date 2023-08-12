import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Canvas } from './components/Canvas/Canvas';
import { Main } from './components/Main/Main';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { ProjectDetails } from './components/Projects/ProjectDetails';
import { Contact } from './components/Contact/Contact';

const App = () => {
  return (
    <Body>
      <Router>
        <Canvas />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Body>
  );
};

const Body = styled.div`
  /* global styles */
  color: #dadada;
  font-family: 'Poppins';
  padding-top: 1%;
  display: flex;
  flex-direction: column;
`;

export default App;
