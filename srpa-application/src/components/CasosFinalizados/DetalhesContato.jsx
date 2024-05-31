import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DetalhesContato = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { contact } = location.state || { contact: {} };

  return (
    <StyledContainer>
      <h2>Detalhes do Contato</h2>
      <p><strong>Nome:</strong> {contact.nome}</p>
      <p><strong>CPF:</strong> {contact.cpf}</p>
      <p><strong>Data:</strong> {contact.data}</p>
      <button onClick={() => navigate('/')}>Voltar</button>
    </StyledContainer>
  );
};

export default DetalhesContato;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 50%;
  max-width: 600px;
  margin: 2rem auto;
  border: 1px solid #000000;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: #001753;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
