import styled from 'styled-components';

const Item = (item) => {
  return <Container>{item.item.content}</Container>;
};

const Container = styled.div`
  text-align: center;
  font-weight: bolder;
  font-size: larger;
  margin: 50px;
`;

export { Item };
