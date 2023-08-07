import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { projectscontent } from './projectscontent';

const ProjectDetails = () => {
  const { projectId } = useParams();

  return (
    <>
      <div>Project Details Here</div>
    </>
  );
};

export { ProjectDetails };
