import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProximosJogos from './components/ProximosJogos';
import ElencoAtual from './components/ElencoAtual';
import GaleriaDeClipes from './components/GaleriaDeClipes';
import LinkLoja from './components/LinkLoja';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ChatSimulado from './components/ChatSimulado';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <ProximosJogos />
      <ElencoAtual />
      <LinkLoja />
      <ChatSimulado />
      <GaleriaDeClipes />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
