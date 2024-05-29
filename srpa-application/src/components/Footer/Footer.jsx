import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <Container id="footer">
      <Centralizar>
        <Slide direction="down">
          <RouterLink to="/">
            <Img src={Logo} alt="Logo Pegoraro Amorim" />
          </RouterLink>
        </Slide>
      </Centralizar>
      <Texts>
        <Pages>
          <h4>Home</h4>
          <h4>Bancos</h4>
          <h4>Power BI</h4>
        </Pages>
        <Developer>
          <h3>Desenvolvedores:</h3>
          <h4>Reginaldo Alves</h4>
          <h4>Regina Pompeo</h4>
          <h3>DBA:</h3>
          <h4>Fábio Soares</h4>
        </Developer>
      </Texts>
      <Copy>
        <p>© Copyright 2024 - Pegoraro Equipe de TI</p>
      </Copy>
    </Container>
  );
};

export default Footer;


const Container = styled.div`
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  width: 80%;
  padding: 3rem 0 1rem 0;
  position: relative;
  margin: 0 auto;
  animation: header 500ms ease-in-out;
  @media (max-width: 840px) {
    width: 90%;
  }
`;

const Centralizar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled(RouterLink)``;

const Img = styled.img`
  width: 10rem;
  height: 7rem;
`;

const Texts = styled.div`
  color: #E0E0E0;
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Pages = styled.div`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Radio Canada Big", sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;
  font-style: normal;
`;

const Developer = styled.div`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Radio Canada Big", sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;
  font-style: normal;
`;

const Copy = styled.div`
  text-align: center;
  color: #E0E0E0;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: "Radio Canada Big", sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;
  font-style: normal;
`;