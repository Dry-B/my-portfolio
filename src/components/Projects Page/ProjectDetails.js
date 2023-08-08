import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { projectscontent } from './projectscontent';

const ProjectDetails = () => {
  const { projectId } = useParams();

  return (
    <>
      <img
        src={projectscontent[0].images.find((img) => img.id === projectId).gif}
      />
    </>
  );
};

export { ProjectDetails };
