import React, { useState } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const CasosFinalizados = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const data = [
    { nome: "Regina Pompeo Batista Alves da Silva Pereira Célia Santiago Carvalho", cpf: "CPF Exemplo", data: "Data Exemplo" },
     { nome: "Fabio Urbina", cpf: "CPF Exemplo 2", data: "Data Exemplo 2" },
    { nome: "Nome Exemplo 3", cpf: "CPF Exemplo 3", data: "Data Exemplo 3" },
    { nome: "Nome Exemplo 4", cpf: "CPF Exemplo 4", data: "Data Exemplo 4" },
    { nome: "Nome Exemplo 5", cpf: "CPF Exemplo 5", data: "Data Exemplo 5" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
    { nome: "Nome Exemplo 6", cpf: "CPF Exemplo 6", data: "Data Exemplo 6" },
  ];

  const filteredData = data.filter(
    (item) =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.cpf.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.data.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentData = filteredData.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleRowClick = (item) => {
    navigate(`/detalhes/${encodeURIComponent(item.nome)}`, { state: { contact: item } });
  };

  const handleSearch = () => {
    setCurrentPage(0);
  };

  return (
    <StyledContainer id="casosFinalizados">
      <SearchContainer>
      <StyledText>
        <h2>Casos Finalizados</h2>
        <h4>Casos finalizados disponíveis para a verificação.</h4>
      </StyledText>
      <SearchGroup>
          <SearchInput
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchGroup>
      </SearchContainer>
        <StyledTextTitle>
          <h3>Nome</h3>
          <h3>CPF</h3>
          <h3>Data</h3>
        </StyledTextTitle>
      <StyledFields>
        {currentData.map((item, index) => (
          <FieldsRow key={index} onClick={() => handleRowClick(item)}>
            <FieldsName>{item.nome}</FieldsName>
            <FieldsCPF>{item.cpf}</FieldsCPF>
            <FieldsData>{item.data}</FieldsData>
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
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 10rem;
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
  border: 1px solid #000000;
  padding: 5px;
  border-radius: 5px;
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

const FieldsData = styled.div`
  flex: 1;
  padding: 0 10px;
`;

const StyledContainer = styled(Container)`
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

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SearchGroup = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  flex: 1;
  width: 15rem;
  max-width: 400px;
  padding: 0.5rem;
  margin-left: 1rem;
  border: 1px solid #001753;
  border-radius: 5px;
  font-size: 1rem;
  color: #000000;
  background: transparent;
  ::placeholder {
    color: #000000;
  }
`;

