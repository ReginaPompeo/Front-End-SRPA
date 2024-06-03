import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackIcon from '../../assets/BackIcon.png';

const DetalhesContato = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { contact } = location.state || { contact: {} };

  return (
    <Container>
      <StyledContainer>
        <h2>Detalhes do Contato</h2>
        <Details>
          <div><strong>Nome:</strong> {contact.nome}</div>
          <div><strong>CPF:</strong> {contact.cpf}</div>
          <div><strong>Data:</strong> {contact.data}</div>
          <div><strong>Email:</strong> {contact.email}</div>
          <div><strong>Telefone:</strong> {contact.telefone}</div>
          <div><strong>Endereço:</strong> {contact.endereco}</div>
        </Details>
        <ButtonContainer>
          <button onClick={() => navigate('/casosfinalizados')}>
            <img src={BackIcon} alt="Botão para voltar a página anterior" />
          </button>
        </ButtonContainer>
      </StyledContainer>
    </Container>
  );
};

export default DetalhesContato;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  width: 80%;
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 5rem;
  justify-content: center;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid #000000;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem; /* Ajustado para ser um pouco maior */
    font-family: "Lora", serif; /* Mesma fonte que o conteúdo */
    font-weight: bold;
    letter-spacing: 1px;
    color: #001753;
  }
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem 5rem; /* Ajustar espaçamento entre colunas e linhas */
  text-align: left;
  margin: 1rem 0;

  div {
    margin-bottom: 0.5rem;
    font-family: "Radio Canada Big", sans-serif; /* Fonte consistente */
    font-size: 1rem; /* Tamanho da fonte para o texto de contato */
    font-weight: normal;
  }

  strong {
    font-size: 1.1rem; /* Tamanho maior para o cabeçalho */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;

  button {
    align-items: right;
    padding: 0.4rem 0.4rem;
    background-color: #081E57;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 4rem;
    height: 3rem;
    transition: background-color 0.3s;
    &:hover {
      background-color: #A36201;
    }

    img {
      height: 1.3rem;
    }
  }
`;
