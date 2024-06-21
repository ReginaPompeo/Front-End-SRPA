import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';

const InserirBancos = () => {
  // Estado local para armazenar os valores dos campos
  const [codigoBanco, setCodigoBanco] = useState("");
  const [nomeBanco, setNomeBanco] = useState("");
  const [bancos, setBancos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");


   // Função para buscar os bancos da API
   const fetchBancos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/banco/listarBancos");
      console.log("Dados recebidos:", response.data);
      setBancos(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar bancos:", error);
      setLoading(false);
    }
  };

  // Hook useEffect para buscar os bancos quando o componente montar
  useEffect(() => {
    fetchBancos();
  }, []); // O segundo parâmetro vazio [] garante que useEffect seja executado apenas uma vez

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:8080/banco/criarBanco", {
        codigoBanco,
        nomeBanco,
      });
      console.log("Resposta do servidor:", response.data);
      setResponseMessage("Banco inserido com sucesso!");

      // Após inserir o banco com sucesso, buscar novamente a lista atualizada
      fetchBancos();
    } catch (error) {
      console.error("Erro ao inserir banco:", error);
      setResponseMessage("Erro ao inserir banco. Verifique o console para mais detalhes.");
    } finally {
      setIsSubmitting(false);
    }
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
      <ListBank>
        <TitleList>
          <h2>Lista de Bancos</h2>
        </TitleList>
        <Board>
          <StyledTextTitle>
            <h3>Código do Banco</h3>
            <h3>Nome do Banco</h3>
          </StyledTextTitle>
          <StyledFields>
            {loading ? (
              <p>Carregando...</p>
            ) : (
              bancos.map((banco) => (
                <FieldsRow key={banco.id}>
                  <FieldsCPF>{banco.id}</FieldsCPF>
                  <FieldsName>{banco.nome}</FieldsName>
                </FieldsRow>
              ))
            )}
          </StyledFields>
        </Board>
      </ListBank>
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
  margin-top: 1rem
`;

const ListBank = styled.div`
  flex-direction: column;
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;
  text-align: left;
  cursor: pointer;
  ul {
    list-style-type: none;
    padding: 0;
    width: auto;
  }
`;

const TitleList = styled.div`
  margin-bottom: 2rem;
  h2 {
    font-size: 2rem;
    font-family: "Lora", serif;
    letter-spacing: 1px;
    color: #001753;
  }
`;

const Board = styled.div`
  border: 1px solid #000000;
  padding: 2rem;
  border-radius: 10px;
`;

const StyledTextTitle = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 1rem;
  h3 {
    flex: 1;
    padding-left: 0.5rem;
    font-size: 1.5rem;
    font-family: "Lora", serif;
    font-weight: bold;
    letter-spacing: 1px;
    color: #001753;
  }
`;

const StyledFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FieldsRow = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding: 8px;
  cursor: pointer;
`;

const FieldsName = styled.div`
  flex: 1;
  padding: 0 10px;
`;

const FieldsCPF = styled.div`
  flex: 1;
  padding: 0 10px;
`;