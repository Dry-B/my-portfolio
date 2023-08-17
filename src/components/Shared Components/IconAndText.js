import styled from 'styled-components';
import { Icon } from '@iconify/react';

// This component takes an array of objects and returns a document of styled elements.
// Objects can contain title, content, 1 x icon.
const IconAndText = (content) => {
  return (
    <Container>
      <Icon icon={content.content.icon} style={iconStyle} />
      <Text>{content.content.content}</Text>
    </Container>
  );
};

const Text = styled.div`
  width: 90%;
  max-width: 30rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 30rem;
`;

const iconStyle = {
  color: '#7289da',
  width: '90%',
  height: '90%',
};

export { IconAndText };
