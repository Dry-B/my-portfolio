import maincontent from './maincontent';
import { TextContainer } from '../Shared Components/TextContainer';
import { ContentContainer } from '../Shared Components/ContentContainer';
import styled from 'styled-components';

const Main = () => {
  return (
    <>
      {maincontent.map((content) => {
        return content.type === 'text' ? (
          <TextContainer key={content.id} text={content} />
        ) : (
          <ContentContainer key={content.id} content={content} />
        );
      })}
    </>
  );
};

const MainElement = styled.div``;

export { Main };
