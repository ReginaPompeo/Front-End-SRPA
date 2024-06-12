import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackIcon from '../../assets/BackIcon.png';
import PDFIcon from '../../assets/baixar-pdf.png';

const DetalhesContato = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { contact } = location.state || { contact: {} };

  return (
    <Container>
      <StyledContainer>
        <h2>Detalhes do Contato</h2>
        <Details>
          <div><strong>ID Usuário</strong> {contact.id_usuario}</div>
          <div><strong>Usuário:</strong> {contact.usuario}</div>
          <div><strong>ID Banco:</strong> {contact.id_banco}</div>
          <div><strong>Banco:</strong> {contact.banco}</div>
          <div><strong>ID Parceiro:</strong> {contact.id_parceiro}</div>
          <div><strong>Parceiro:</strong> {contact.parceiro}</div>
          <div><strong>ID Habilitação</strong> {contact.id_hab}</div>
          <div><strong>Observação:</strong> {contact.observacao}</div>
          <div><strong>PJ:</strong> {contact.pj}</div>
          <div><strong>Autor</strong> {contact.autor}</div>
          <div><strong>ID Situação:</strong> {contact.id_situacao}</div>
          <div><strong>Situação</strong> {contact.situacao}</div>
          <div><strong>CPF:</strong> {contact.cpf}</div>
          <div><strong>CNJ:</strong> {contact.cnj}</div>
          <div><strong>Habilitação Herdeiro:</strong> {contact.hab_herdeiro}</div>
          <div><strong>Agência</strong> {contact.agencia}</div>
          <div><strong>Conta:</strong> {contact.conta}</div>
          <div><strong>Valor:</strong> {contact.val}</div>
          <div><strong>ID Tipo de conta:</strong> {contact.id_tipo_conta}</div>
          <div><strong>Tipo de conta:</strong> {contact.tipo_conta}</div>
          <div><strong>Valor Atualizado:</strong> {contact.val_atualizado}</div>
          <div><strong>Valor índice:</strong> {contact.val_indice}</div>
          <div><strong>Honorários Contratuais:</strong> {contact.honor_cont}</div>
          <div><strong>Data de Entrada:</strong> {contact.dat_entr}</div>
          <div><strong>Horário</strong> {contact.hor}</div>
          <div><strong>Data PASA:</strong> {contact.dat_pasa}</div>
          <div><strong>Monetaria:</strong> {contact.monetaria}</div>
        </Details>
        <ButtonContainer>
          <button onClick={() => navigate('/casosfinalizados')}>
            <img src={BackIcon} alt="Botão para voltar a página anterior" />
          </button>
          <button>
            <img src={PDFIcon} alt="Baixar PDF" />
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
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 20rem;
  
  
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
  gap: 1rem;

  button {
    align-items: right;
    padding: 0.2rem 0.2rem;
    background-color: #081E57;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 3.5rem;
    height: 2.5rem;
    transition: background-color 0.3s;
    &:hover {
      background-color: #A36201;
    }

    img {
      height: 1.3rem;
    }
  }
`;
