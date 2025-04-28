import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 90px 20px;
  background-color: #fff;
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
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const ItemHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #333;
`;

function ProximosJogos() {
  const jogos = [
    { titulo: 'Ainda sem datas' },
    // Depois você só adiciona mais jogos aqui, tipo:
    
  ];

  return (
    <Section id="jogos">
      <Container>
        <Heading>PRÓXIMOS JOGOS</Heading>
        <List>
          {jogos.map((jogo, index) => (
            <ListItem key={index}>
              <ItemHeading>{jogo.titulo}</ItemHeading>
            </ListItem>
          ))}
        </List>
      </Container>
    </Section>
  );
}

export default ProximosJogos;
