import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa'; // Importando o ícone do Instagram

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 20px;
  text-align: center;

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const InstagramLink = styled.a`
  color: #fff;
  margin-left: 10px;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #e4405f; // Cor do Instagram no hover
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>&copy; 2025 FURIA. Todos os direitos reservados.</FooterText>
      <InstagramLink href="https://www.instagram.com/furiagg/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </InstagramLink>
    </FooterContainer>
  );
}

export default Footer;
