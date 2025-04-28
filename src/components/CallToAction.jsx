import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 90px 20px;
  background-color: #00000;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px; /* Ajusta o padding para telas menores */
  }

  @media (max-width: 480px) {
    padding: 40px 15px; /* Ajusta ainda mais o padding para telas pequenas */
  }
`;

const Heading = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 30px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Reduz o tamanho do título em telas médias */
  }

  @media (max-width: 480px) {
    font-size: 2rem; /* Reduz ainda mais o título em telas pequenas */
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #fff;
  color: #000000;
  font-size: 1.4rem;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;

  &:hover {
    background-color: #e1e1e1;
  }

  @media (max-width: 768px) {
    padding: 12px 25px; /* Ajusta o padding do botão para telas médias */
    font-size: 1.2rem; /* Reduz o tamanho da fonte do botão para telas médias */
  }

  @media (max-width: 480px) {
    padding: 10px 20px; /* Ajusta ainda mais o padding para telas pequenas */
    font-size: 1rem; /* Reduz o tamanho da fonte do botão para telas pequenas */
  }
`;

function CallToAction() {
  return (
    <Section id="contato">
      <Heading>Entre em contato com a gente!</Heading>
      <Button href="https://wa.me/5511993404466" target="_blank">Chega junto</Button>
    </Section>
  );
}

export default CallToAction;
