import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTrophy, FaMapSigns, FaUserAlt, FaUserShield, FaSkull } from 'react-icons/fa';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #111;
`;

const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 2rem;
  margin: 20px 0;
  font-weight: bold;
  text-transform: uppercase;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;

const VideoContainer = styled.div`
  width: 33.33%;
  height: 100%;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 50%;
    height: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
`;

const ChatContainer = styled.div`
  width: 33.33%;
  background-color: #222;
  border-radius: 12px;
  padding: 20px;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    width: 50%;
    height: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
`;

const StatsContainer = styled.div`
  width: 33.33%;
  background-color: #222;
  padding: 20px;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const StatsTitle = styled.h2`
  color: #ffcd00;
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  padding: 10px;
  background-color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const StatIcon = styled.div`
  margin-right: 10px;
  color: #ffcd00;
  font-size: 1.5rem;
`;

const StatText = styled.p`
  font-size: 1.1rem;
  color: #fff;
`;

const MessageList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 10px;
  margin-bottom: 20px;
  scroll-behavior: smooth;
`;

const Message = styled(motion.div)`
  background-color: ${(props) => (props.isUser ? '#646cff' : '#333')};
  color: ${(props) => (props.isUser ? '#fff' : '#aaa')};
  padding: 10px 18px;
  border-radius: 12px;
  margin: 10px 0;
  max-width: 70%;
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) =>
    props.isUser ? '0 4px 8px rgba(100, 102, 255, 0.5)' : 'none'};
`;

const MessageText = styled.span`
  font-size: 1.1rem;
  line-height: 1.5;
`;

const Emoji = styled.span`
  font-size: 1.6rem;
  margin-top: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
`;

const Input = styled.input`
  width: 80%;
  padding: 12px 18px;
  border-radius: 25px;
  border: 1px solid #555;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  transition: border 0.2s ease-in-out;

  &:focus {
    border: 2px solid #646cff;
    outline: none;
  }
`;

const SendButton = styled.button`
  width: 15%;
  padding: 12px 18px;
  border-radius: 25px;
  border: 1px solid transparent;
  background-color: #646cff;
  color: white;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s;

  &:hover {
    background-color: #535bf2;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

const TypingIndicator = styled.div`
  font-style: italic;
  color: #aaa;
  margin-top: 5px;
`;

function ChatSimulado() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messageListRef = useRef(null);

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        content: inputMessage,
        isUser: true,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage('');
      simulateFuriosoResponse(inputMessage);
    }
  };

  const simulateFuriosoResponse = (userMessage) => {
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        'FURIA no coração! 💥 Vamos arrasar, Furiosos! 💪',
        'A FURIA nunca para! O jogo está a todo vapor! 🔥',
        'Sim, estamos prontos para a próxima vitória! Vamos FURIA! 🔥',
        'FURIA é mais que um time, é uma família! 😎',
        'O grito da FURIA vai ecoar no estádio! 🔥',
        'Os Furiosos não param! Cada round é uma guerra! 💣',
        'FURIA vai brilhar, é só aguardar! ✨',
        'Não tem pra ninguém, FURIA é a equipe da vez! 🚀',
        'Estamos prontos para mais uma vitória épica! 🏆',
        'Vem FURIA, vem com tudo! Vamos dominar o servidor! 💥🔥',
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      setMessages((prevMessages) => [
        ...prevMessages,
        { content: randomResponse, isUser: false },
      ]);
    }, 2000);
  };

  useEffect(() => {
    messageListRef.current?.scrollTo(0, messageListRef.current.scrollHeight);
  }, [messages]);

  return (
    <PageContainer id="chat">
      <Title>Furioso, converse durante a partida!</Title>
      <ContentContainer>
        <VideoContainer>
          <iframe
            src="https://www.youtube.com/embed/d6353XB63_Y"
            title="Vídeo do YouTube"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', height: '500px' }}
          />
        </VideoContainer>

        <ChatContainer>
          <MessageList ref={messageListRef}>
            {messages.map((msg, index) => (
              <Message
                key={index}
                isUser={msg.isUser}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <MessageText>{msg.content}</MessageText>
                {!msg.isUser && <Emoji>🔥</Emoji>}
              </Message>
            ))}
            {isTyping && <TypingIndicator>Furioso digitando...</TypingIndicator>}
          </MessageList>
          <InputContainer>
            <Input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
            />
            <SendButton onClick={sendMessage}>Enviar</SendButton>
          </InputContainer>
        </ChatContainer>

        <StatsContainer>
          <StatsTitle>Estatísticas da Partida</StatsTitle>
          <StatItem>
            <StatIcon>
              <FaTrophy />
            </StatIcon>
            <StatText><strong>Resultado:</strong> FURIA vencendo!</StatText>
          </StatItem>
          <StatItem>
            <StatIcon>
              <FaMapSigns />
            </StatIcon>
            <StatText><strong>Mapa:</strong> Mirage</StatText>
          </StatItem>
          <StatItem>
            <StatIcon>
              <FaUserAlt />
            </StatIcon>
            <StatText><strong>Jogador Destaque:</strong> KSCERATO</StatText>
          </StatItem>
          <StatItem>
            <StatIcon>
              <FaUserShield />
            </StatIcon>
            <StatText><strong>Melhor Defesa:</strong> arT</StatText>
          </StatItem>
          <StatItem>
            <StatIcon>
              <FaSkull />
            </StatIcon>
            <StatText><strong>Abates:</strong> 25</StatText>
          </StatItem>
        </StatsContainer>
      </ContentContainer>
    </PageContainer>
  );
}

export default ChatSimulado;
