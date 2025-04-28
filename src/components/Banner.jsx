import React from 'react';
import styled from 'styled-components';
import logoImage from '../assets/logo.png'; // Imagem do logo

const BannerContainer = styled.section`
  position: relative;
  height: 600px; /* Aumentando a altura do banner */
  background-color: #000; /* Fundo preto */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza o conteúdo verticalmente */
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  color: #fff;
  text-align: center;
  padding: 20px; /* Adiciona um padding geral para o conteúdo não ficar encostado nas bordas */

  @media (max-width: 768px) {
    height: 400px; /* Ajusta a altura do banner para telas menores */
  }

  @media (max-width: 480px) {
    height: 300px; /* Ajusta a altura para telas muito pequenas */
  }
`;

const Logo = styled.img`
  width: 200px; /* Ajuste o tamanho do logo conforme necessário */
  margin-bottom: 20px; /* Espaço entre o logo e o texto */

  @media (max-width: 768px) {
    width: 150px; /* Reduz o tamanho do logo em telas médias */
  }

  @media (max-width: 480px) {
    width: 120px; /* Reduz ainda mais o logo em telas pequenas */
  }
`;

const BannerContent = styled.div`
  text-align: center;
`;

const BannerTitle = styled.h1`
  font-size: 4rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 3rem; /* Reduz o tamanho da fonte em telas médias */
  }

  @media (max-width: 480px) {
    font-size: 2.5rem; /* Reduz ainda mais o tamanho da fonte em telas pequenas */
  }
`;

const BannerDescription = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Reduz o tamanho da descrição em telas médias */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Reduz ainda mais o tamanho da descrição em telas pequenas */
  }
`;

function Banner() {
  return (
    <BannerContainer id="home">
      <Logo src={logoImage} alt="Logo da FURIA" /> {/* Imagem do logo */}
      <BannerContent>
        <BannerTitle>Bem-vindo à FURIA!</BannerTitle>
        <BannerDescription>Junte-se a nós na jornada para a vitória.</BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}

export default Banner;
