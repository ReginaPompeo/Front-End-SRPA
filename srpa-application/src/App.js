import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../src/components/Banner/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Bancos from "./components/Bancos/Bancos";
import PowerBI from "./components/PowerBI/PowerBI";
import CasosFinalizados from './components/CasosFinalizados/CasosFinalizados';

function App() {
  return (
    <Router>
      <Container>
        <Banner>
          <Header/>
        </Banner>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bancos" element={<Bancos/>} />
        <Route path="/powerbi" element={<PowerBI/>} />
        <Route path="/casosfinalizados" element={<CasosFinalizados/>} />
        </Routes>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
background: linear-gradient(to top, #002D41, #E5DBCD);
  
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }`;
const Banner = styled.div`
`;
