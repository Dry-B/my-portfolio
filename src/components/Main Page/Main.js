import maincontent from './maincontent';
import { Text } from '../Shared Components/Text';
import { Box } from '../Shared Components/Box';
import styled from 'styled-components';

const Main = () => {
  return (
    <>
      {maincontent.map((content) => {
        return content.type === 'text' ? (
          <Text key={content.id} text={content} />
        ) : (
          <Box key={content.id} content={content} />
        );
      })}
    </>
  );
};

const MainElement = styled.div``;

export { Main };
