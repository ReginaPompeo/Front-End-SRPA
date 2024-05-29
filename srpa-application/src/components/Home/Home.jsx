import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

const Home = () => {
    return (
        <Container id="home">
            <Slide direction="down">
                <Text>
                    <h2>Sejam bem-vindos ao novo sistema S.R.P.A - EOJ</h2>
                    <h4>Sistema de Repasses Pegoraro Amorim - EOJ</h4>
                </Text>
            </Slide>
            <Slide direction="up">
                    <Img src="https://www.pegoraroamorim.com.br/wp-content/uploads/2022/03/banner_pegoraro_01-1-1024x357.png" alt="Banner Home Pegoraro"/>

            </Slide>
        </Container>
    );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 5rem;
  height: 100vh;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h4 {
    font-size: 2rem;
    font-weight: 500;
    font-family: "Lora", serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
  h2 {
    font-size: 2rem;
    font-family: "Lora", serif;
    font-optical-sizing: auto;
    font-style: normal;
    letter-spacing: 2px;
  }
`;


const Img = styled.img`
  width: 60rem;
  height: 25rem;
  padding: 2rem 0;
  
  transition: transform 400ms ease-in-out;
  @media (max-width: 790px) {
    width: 20rem;
    height: 20rem;
  }

  @media (max-width: 660px) {
    width: 18rem;
    height: 18rem;
    position: relative;
    bottom: -5px;
  }

  @media (max-width: 640px) {
    width: 100%;
    height: 100%;
    position: relative;
    bottom: -5px;
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
