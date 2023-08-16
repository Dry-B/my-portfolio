import { motion } from 'framer-motion';
import styled from 'styled-components';

const BackDrop = ({ children, onClick }) => {
  return (
    <StyledBackDrop
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </StyledBackDrop>
  );
};

const StyledBackDrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { BackDrop };
