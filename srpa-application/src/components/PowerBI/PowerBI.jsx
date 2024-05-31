import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PowerBI = () => {
    return (
        <StyledContainer id="powerbi">
        <StyledText>
          <h2>Power BI</h2>
          <h4>Power BI disponibilizado para visualização.</h4>
        </StyledText>
        <StyledButton as={Link} to="https://mail.google.com/mail/u/0/#inbox">Ir para Power BI</StyledButton>
      </StyledContainer>
    );
  };

export default PowerBI;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 5rem;
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
const Button = styled.button`
  padding: 0.6rem 1rem;
  background-color: #081E57;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 15rem;
  height: 3rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: #A36201;
  }
`;

const StyledContainer = styled(Container)`
  padding: 2rem;
  height: 100vh;
`;

const StyledText = styled(Text)`
  color: #333;
`;
const StyledButton = styled(Button)`
  margin: auto;
  margin-top: 1rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: #F5F5F5;
`;   