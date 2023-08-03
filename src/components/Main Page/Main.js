import maincontent from './maincontent';
import { Item } from '../Shared Components/Item';
import styled from 'styled-components';

const Main = () => {
  return (
    <>
      {maincontent.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </>
  );
};

const MainElement = styled.div``;

export { Main };
