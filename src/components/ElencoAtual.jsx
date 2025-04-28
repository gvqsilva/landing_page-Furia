import React from 'react';
import styled from 'styled-components';

import jogador1Image from '../assets/jogador1.webp';
import jogador2Image from '../assets/jogador2.webp';
import jogador3Image from '../assets/jogador3.webp';
import jogador4Image from '../assets/jogador4.webp';
import jogador5Image from '../assets/jogador5.webp';
import jogador6Image from '../assets/jogador6.webp';
import jogador7Image from '../assets/jogador7.webp';
import brFlag from '../assets/flag1.webp';
import letFlag from '../assets/flag2.png';
import cazFlag from '../assets/flag3.png';

const Section = styled.section`
  padding: 90px 20px;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 50px;
  color: #333;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-between;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const PlayerImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const PlayerNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const PlayerName = styled.h3`
  font-size: 1.6rem;
  color: #333;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-right: 10px;
`;

const Flag = styled.img`
  width: 20px;
  height: 15px;
  vertical-align: middle;
`;

const PlayerRealName = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 10px 0;
`;

const PlayerRole = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;

const ReserveGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

function ElencoAtual() {
  return (
    <Section id="elenco">
      <Container>
        <Heading>Elenco Atual</Heading>
        <Grid>
          <Card>
            <PlayerImage src={jogador1Image} alt="FalleN" />
            <div>
              <PlayerNameContainer>
                <Flag src={brFlag} alt="Brasil" />
                <PlayerName>FalleN</PlayerName>
              </PlayerNameContainer>
            </div>
            <PlayerRealName>Gabriel Toledo</PlayerRealName>
            <PlayerRole>Rifler</PlayerRole>
          </Card>
          <Card>
            <PlayerImage src={jogador2Image} alt="yuurih" />
            <div>
              <PlayerNameContainer>
                <Flag src={brFlag} alt="Brasil" />
                <PlayerName>yuurih</PlayerName>
              </PlayerNameContainer>
            </div>
            <PlayerRealName>Yuri Santos</PlayerRealName>
            <PlayerRole>Rifler</PlayerRole>
          </Card>
          <Card>
            <PlayerImage src={jogador3Image} alt="YEKINDAR" />
            <div>
              <PlayerNameContainer>
                <Flag src={letFlag} alt="Letônia" />
                <PlayerName>YEKINDAR</PlayerName>
              </PlayerNameContainer>
            </div>
            <PlayerRealName>Mareks Gaļinskis</PlayerRealName>
            <PlayerRole>Rifler</PlayerRole>
          </Card>
          <Card>
            <PlayerImage src={jogador4Image} alt="KSCERATO" />
            <div>
              <PlayerNameContainer>
                <Flag src={brFlag} alt="Brasil" />
                <PlayerName>KSCERATO</PlayerName>
              </PlayerNameContainer>
            </div>
            <PlayerRealName>Kaike Cerato</PlayerRealName>
            <PlayerRole>Rifler</PlayerRole>
          </Card>
          <Card>
            <PlayerImage src={jogador5Image} alt="molodoy" />
            <div>
              <PlayerNameContainer>
                <Flag src={cazFlag} alt="Cazaquistão" />
                <PlayerName>molodoy</PlayerName>
              </PlayerNameContainer>
            </div>
            <PlayerRealName>Danil Golubenko</PlayerRealName>
            <PlayerRole>AWPer</PlayerRole>
          </Card>
        </Grid>

        <Heading>Reservas</Heading>
        <ReserveGrid>
          <Card>
            <PlayerImage src={jogador6Image} alt="skullz" />
            <div>
              <PlayerNameContainer>
                <Flag src={brFlag} alt="Brasil" />
                <PlayerName>skullz</PlayerName>
              </PlayerNameContainer>
            </div>
            <PlayerRealName>Felipe Medeiros</PlayerRealName>
            <PlayerRole>Reserva</PlayerRole>
          </Card>
          <Card>
            <PlayerImage src={jogador7Image} alt="chelo" />
            <div>
              <PlayerNameContainer>
                <Flag src={brFlag} alt="Brasil" />
                <PlayerName>chelo</PlayerName>
              </PlayerNameContainer>
            </div>
            <PlayerRealName>Marcelo Cespedes</PlayerRealName>
            <PlayerRole>Reserva</PlayerRole>
          </Card>
        </ReserveGrid>
      </Container>
    </Section>
  );
}

export default ElencoAtual;
