import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa'; // Adicionamos o ícone de fechar
import logo from '../assets/logo.png'; // Caminho para a logo

// Estilização do Header
const HeaderContainer = styled.header`
  padding: 20px 30px;
  background-color: #242424;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
  margin-right: 20px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  margin: 0 20px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #646cff;
    transform: scale(1.1);
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    color: #fff;
  }
`;

const MobileNav = styled.div`
  position: absolute;
  top: 70px;
  right: 30px;
  background-color: #242424;
  width: 200px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  opacity: ${({ open }) => (open ? '1' : '0')};
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-10px)')};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  transition: opacity 0.3s ease, transform 0.3s ease;

  a {
    display: block;
    margin: 10px 0;
    color: #fff;
    font-size: 1.2rem;
    text-decoration: none;

    &:hover {
      color: #646cff;
    }
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo da FURIA E-sports" />
      <Navigation>
        <NavLink href="#jogos">Calendário</NavLink>
        <NavLink href="#elenco">Elenco</NavLink>
        <NavLink href="#loja">Loja</NavLink>
        <NavLink href="#chat">Transmissão</NavLink>
        <NavLink href="#clipes">Clipes</NavLink>
        <NavLink href="#contato">Contato</NavLink>
      </Navigation>
      <HamburgerMenu onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </HamburgerMenu>
      <MobileNav open={isMenuOpen}>
        <NavLink href="#jogos" onClick={closeMenu}>Calendário</NavLink>
        <NavLink href="#elenco" onClick={closeMenu}>Elenco</NavLink>
        <NavLink href="#loja" onClick={closeMenu}>Loja</NavLink>
        <NavLink href="#chat" onClick={closeMenu}>Transmissão</NavLink>
        <NavLink href="#clipes" onClick={closeMenu}>Clipes</NavLink>
        <NavLink href="#contato" onClick={closeMenu}>Contato</NavLink>
      </MobileNav>
    </HeaderContainer>
  );
}

export default Header;
