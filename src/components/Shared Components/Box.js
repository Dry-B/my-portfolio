import styled from 'styled-components';
import { Icon } from '@iconify/react';

const Box = (content) => {
  return (
    <Container>
      <StyledBox>
        <Title>{content.content.title}</Title>
        <Text>{content.content.content}</Text>
        <Icon icon={content.content.icon} style={iconStyle} />
      </StyledBox>
    </Container>
  );
};

const Title = styled.div`
  background-color: #36393e;
  font-weight: bolder;
  font-size: larger;
  margin-bottom: 25px;
`;
const Text = styled.div`
  background-color: #36393e;
`;
const Container = styled.div`
  text-align: center;
  margin: 50px;
  display: flex;
  justify-content: center;
`;
const StyledBox = styled.div`
  background-color: #36393e;
  padding: 20px 40px 80px 40px;
  border-radius: 5px;
  width: 75%;
  position: relative;
`;

const iconStyle = {
  position: 'absolute',
  width: '40%',
  height: '40%',
  left: '30%',
};

export { Box };
