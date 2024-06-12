import React, { useState } from "react";
import styled from "styled-components";
import logoImage from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [bar, setBar] = useState(false);

    return (
        <Container bar={bar}>
            <Logo>
                <span className="Logo">
                    <img src={logoImage} alt="Logo Pegoraro Amorim"/>
                </span>
            </Logo>
            <Nav bar={bar}>
                <span>
                    <NavLink to="/">Home</NavLink>
                </span>
                <span>
                    <NavLink to="/bancos">Bancos</NavLink>
                </span>
                <span>
                    <NavLink to="/powerbi">Power BI</NavLink>
                </span>
                <span>
                    <NavLink to="/casosfinalizados">Casos Finalizados</NavLink>
                </span>
                <span>
                    <NavLink to="/cadastropessoa">Cadastro Pessoas</NavLink>
                </span>
                <span>
                    <NavLink to="/bancos">Bancos</NavLink>
                </span>
            </Nav>
            <div onClick={() => setBar(!bar)} className="bars">
                <div className="bar"></div>
            </div>
        </Container>
    );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem 0;
  position: relative;
  animation: header 500ms ease-in-out;
  @media (max-width: 840px) {
    width: 90%;
  }
  .bars {
    display: none;
  }
  @media (max-width: 640px) {
    .bars {
      width: 40px;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      z-index: 100;
      .bar {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${(props) => (props.bar ? "transparent" : "#081E57")};
        transition: all 400ms ease-in-out;
        :before,
        :after {
          content: "";
          width: 100%;
          height: 2px;
          background-color: #081E57;
          position: absolute;
        }

        :before {
          transform: ${(props) =>
            props.bar ? "rotate(45deg)" : "translateY(10px)"};
          transition: all 400ms ease-in-out;
        }

        :after {
          transform: ${(props) =>
            props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
          transition: all 400ms ease-in-out;
        }
      }
    }
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;
const Nav = styled.div`
  @media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #081e57;
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props) => (props.bar ? "100vh" : 0)};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 100;
  }
  span {
    margin-left: 1rem;
    font-size: 1.2rem;
    font-family: "Lora", serif;
    font-optical-sizing: auto;
    font-style: normal;
    letter-spacing: 1px;
    a {
      color: #081e57; /* Cor do texto */
      text-decoration: none;
      position: relative;
      font-weight: 400;
      &:before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px; /* Altura do sublinhado */
        background-color: #081e57; /* Cor do sublinhado */
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
      }
      &:hover:before {
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }
`;
