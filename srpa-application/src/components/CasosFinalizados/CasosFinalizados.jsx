import React, { useState } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const CasosFinalizados = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const data = [
    { nome: "Nome Exemplo", cpf: "CPF Exemplo", data: "Data Exemplo" },
    { nome: "Nome Exemplo 2", cpf: "CPF Exemplo 2", data: "Data Exemplo 2" },
    { nome: "Nome Exemplo 3", cpf: "CPF Exemplo 3", data: "Data Exemplo 3" },
    { nome: "Nome Exemplo 4", cpf: "CPF Exemplo 4", data: "Data Exemplo 4" },
    { nome: "Nome Exemplo 5", cpf: "CPF Exemplo 5", data: "Data Exemplo 5" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
  ];

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentData = data.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleRowClick = (item) => {
    navigate(`/detalhes/${item.nome}`, { state: { contact: item } });
  };

  return (
    <StyledContainer id="powerbi">
      <StyledText>
        <h2>Casos Finalizados</h2>
        <h4>Casos finalizados disponíveis para a verificação.</h4>
      </StyledText>
      <StyledTextTitle>
        <h3>Nome</h3>
        <h3>CPF</h3>
        <h3>Data</h3>
      </StyledTextTitle>
      <StyledFields>
        {currentData.map((item, index) => (
          <FieldsRow key={index} onClick={() => handleRowClick(item)}>
            <FieldsName>
              <p>{item.nome}</p>
            </FieldsName>
            <FieldsCPF>
              <p>{item.cpf}</p>
            </FieldsCPF>
            <FieldsData>
              <p>{item.data}</p>
            </FieldsData>
          </FieldsRow>
        ))}
      </StyledFields>
      <PaginationContainer>
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Próximo"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </PaginationContainer>
    </StyledContainer>
  );
};

export default CasosFinalizados;

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

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FieldsRow = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  border: 1px solid #000000; /* Adiciona uma borda preta ao redor de cada linha */
  padding: 5px; /* Adiciona um pouco de espaçamento interno */
  border-radius: 5px; /* Adiciona cantos arredondados */
  cursor: pointer; /* Adiciona o cursor pointer ao passar sobre a linha */
`;

const FieldsName = styled.div`
  flex: 1;
  padding: 0 10px;
`;

const FieldsCPF = styled.div`
  flex: 1;
  padding: 0 10px;
`;

const FieldsData = styled.div`
  flex: 1;
  padding: 0 10px;
`;

const StyledContainer = styled(Container)`
  padding: 1rem;
  height: 100vh;
`;

const StyledText = styled(Text)`
  color: #333;
`;

const StyledTextTitle = styled(Text)`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 1rem;
  h3 {
    flex: 1;
    padding-left: 0.5rem;
    font-size: 1.4rem;
    font-family: "Lora", serif;
    font-optical-sizing: auto;
    font-style: bold;
    letter-spacing: 1px;
    color: #001753;
  }
`;

const StyledFields = styled(Fields)``;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
  }
  .pagination li {
    margin: 0 5px;
  }
  .pagination li a {
    border: none;
    padding: 5px 10px;
    text-decoration: none;
    color: #001753;
    cursor: pointer;
  }
  .pagination li.active a {
    background-color: #A36201;
    color: white;
    border: none;
  }
  .pagination li.disabled a {
    color: #001753;
    cursor: not-allowed;
  }
  .pagination li a:hover {
    background-color: #A36201;
  }
`;
