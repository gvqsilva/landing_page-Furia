import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 90px 20px;
  background-color: #fff;

  @media (max-width: 480px) {
    padding: 1000px 20px 0px;
  }
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 45px;
  color: #333;
  text-align: center;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const ClipCard = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ClipVideo = styled.iframe`
  width: 100%;
  height: 200px;
  border-radius: 8px;

  @media (max-width: 480px) {
    height: 170px;
  }
`;

function GaleriaDeClipes() {
  return (
    <Section id="clipes">
      <Container>
        <Heading>GALERIA DE CLIPES</Heading>
        <Grid>
          <ClipCard>
            <ClipVideo src="https://www.youtube.com/embed/0NluG5rZlWo" title="Clip 1" />
          </ClipCard>
          <ClipCard>
            <ClipVideo src="https://www.youtube.com/embed/p75_-Zsi5RY" title="Clip 2" />
          </ClipCard>
          <ClipCard>
            <ClipVideo src="https://www.youtube.com/embed/akBN8CU9fZk" title="Clip 3" />
          </ClipCard>
        </Grid>
      </Container>
    </Section>
  );
}

export default GaleriaDeClipes;
