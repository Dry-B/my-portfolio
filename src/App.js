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
        </Routes>
      </Router>
    </Body>
  );
};

const Body = styled.div`
  color: #dadada;
  font-family: 'Poppins';
  padding-bottom: 30vh;
  display: flex;
  flex-direction: column;
  background: #1e2124;
`;

export default App;
