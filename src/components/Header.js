import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <div>Header</div>
      <div>Header2</div>
      <div>Header3</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
`;

export { Header };
