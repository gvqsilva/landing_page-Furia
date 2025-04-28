import React from 'react';
import styled from 'styled-components';
import bannerImage from '../assets/banner2.webp';

const Section = styled.section`
  background: url(${bannerImage}) center center / cover no-repeat;
  padding: 80px 50px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 450px;
  color: white;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 60px 20px;
    text-align: center;
  }
`;

const LeftContent = styled.div`
  max-width: 60%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 30px;
  }
`;

const Heading = styled.h2`
  font-size: 2.8rem;
  margin: 0;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const RightContent = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 35%;

  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: center;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 18px 40px;
  background-color: #fff;
  color: #000;
  font-size: 1.4rem;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-4px);
  }

  &:active {
    transform: translateY(0);
  }
`;

function LinkLoja() {
  return (
    <Section id="loja">
      <LeftContent>
        <Heading>Visite a</Heading>
        <Heading>nossa Loja</Heading>
      </LeftContent>
      <RightContent>
        <Button href="https://www.furia.gg/" target="_blank" rel="noopener noreferrer">
          Comprar Agora
        </Button>
      </RightContent>
    </Section>
  );
}

export default LinkLoja;
