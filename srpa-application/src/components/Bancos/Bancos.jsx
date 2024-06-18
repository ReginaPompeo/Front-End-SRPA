import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

const InserirBancos = () => {
  // Estado local para armazenar os valores dos campos
 const [codigoBanco, setCodigoBanco] = useState("");
  const [nomeBanco, setNomeBanco] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const codigoBancoInt = parseInt(codigoBanco, 10);

    const bancoData = {
      id: codigoBanco,
      nome: nomeBanco
    };

    setIsSubmitting(true);

    fetch("http://localhost:8080/banco/criarBanco", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Accept":"application/json"
      },
      body: JSON.stringify(bancoData),
      mode: "no-cors"
    })
    .then(response => response.text())
    .then(result => {
      setResponseMessage(result); // Exibe a mensagem de resposta do servidor
      setIsSubmitting(false);
      // Limpa os campos após o envio bem-sucedido
      setCodigoBanco("");
      setNomeBanco("");
    })
    .catch(error => {
      console.error("Erro ao enviar requisição:", error);
      setResponseMessage("Erro ao enviar requisição.");
      setIsSubmitting(false);
    });
  };

  return (
    <StyledContainer id="bancos">
      <StyledText>
        <h2>Inserir Bancos</h2>
        <h4>Caso haja a necessidade, insira um banco nos campos abaixo.</h4>
      </StyledText>
      <Form onSubmit={handleSubmit}>
        <InputsContainer>
          <FormGroup>
            <StyledLabel htmlFor="inputCodBanco">Código do Banco</StyledLabel>
            <Input
              type="text"
              id="inputCodBanco"
              placeholder="Código do banco"
              value={codigoBanco}
              onChange={(e) => setCodigoBanco(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputNomeBanco">Nome do Banco</StyledLabel>
            <Input
              type="text"
              id="inputNomeBanco"
              placeholder="Nome do banco"
              value={nomeBanco}
              onChange={(e) => setNomeBanco(e.target.value)}
              required
            />
          </FormGroup>
        </InputsContainer>
        <StyledButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </StyledButton>
        {responseMessage && <ResponseMessage>{responseMessage}</ResponseMessage>}
      </Form>
    </StyledContainer>
  );
};
export default InserirBancos;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 5rem;
  height: 100vh;
  justify-content: center;
`;

const Text = styled.div`
  text-align: left;
  margin-bottom: 2rem;
  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    font-family: "Lora", serif;
    font-optical-sizing: auto;
    font-style: normal;
    color: #000000;
  }
  h2 {
    font-size: 2rem;
    font-family: "Lora", serif;
    font-optical-sizing: auto;
    font-style: normal;
    letter-spacing: 1px;
    color: #001753;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const FormGroup = styled.div`
  width: calc(50% - 1.5rem);
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-sizing: border-box;
  height: 3rem;
`;

const Button = styled.button`
  padding: 0.6rem 1rem;
  background-color: #081E57;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 15rem;
  height: 3rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #A36201;
  }
`;

const StyledContainer = styled(Container)`
  padding: 2rem;
`;

const StyledText = styled(Text)`
  color: #333;
`;

const StyledLabel = styled(Label)`
 font-size: 1.2rem;
 font-weight: 500;
 font-family: "Lora", serif;
 font-optical-sizing: auto;
 font-style: normal;
 color: #000000;
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
  font-size: 1.1rem;
  letter-spacing: 1px;
  color: #F5F5F5;
`;   
const ResponseMessage = styled.p`
  margin-top: 1rem`;
