import React from 'react';
import Layout from './components/Layout';
import InfoBanner from './components/InfoBanner';
import { Person } from './data/person';
import { projects } from './data/project';
import ProjectBanner from './components/ProjectBanner';
import styled from 'styled-components';
import { useWindowWidth } from './hooks/useWindowWidth';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const LookWrapper = styled.div`
  margin: 0 10%;
`;

const Look = styled.h1`
  font-size: 24px;
  font-weight: 500px;
  margin-top: 20px;
  color: black;
`;

function App() {
  AOS.init();
  const width= useWindowWidth();
  let landscape = true;
  if(width <= 750) landscape = false

  return (
    <Layout>
      <InfoBanner {...Person} landscape={landscape}></InfoBanner>
      <LookWrapper><Look>Take a look at my projects ...</Look></LookWrapper>
      {projects.map((project, index) => <ProjectBanner  key={project.title} {...project} landscape={landscape} index={index}/>)}
    </Layout>
  );
}

export default App;
