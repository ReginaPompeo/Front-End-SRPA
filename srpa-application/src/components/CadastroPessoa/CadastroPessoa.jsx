import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NumberFormat } from 'react-number-format';



const InserirPoupador = () => {
  // Estado local para armazenar os valores dos campos
  const [id_usuario, setId_usuario] = useState("");
  const [usuario, setUsuario] = useState("");
  const [id_banco, setId_banco] = useState("");
  const [banco, setBanco] = useState("");
  const [id_parceiro, setId_parceiro] = useState("");
  const [parceiro, setParceiro] = useState("");
  const [id_hab, setId_hab] = useState("");
  const [observacao, setObservacao] = useState("");
  const [pj, setPj] = useState("");
  const [autor, setAutor] = useState("");
  const [situacao, setSituacao] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnj, setCnj] = useState("");
  const [hab_herdeiro, setHab_herdeiro] = useState("");
  const [agencia, setAgencia] = useState("");
  const [conta, setConta] = useState("");
  const [val, setVal] = useState("");
  const [id_tipo_conta, setId_tipo_conta] = useState([
    { id: 1, nome: 'Conta corrente individual' },
    { id: 2, nome: 'Conta poupanca individual' },
    { id: 3, nome: 'Conta depósito judicial individual' },
    { id: 4, nome: 'Conta corrente conjunta'},
    { id: 5, nome: 'Conta poupanca conjunta'},
    { id: 6, nome: 'Conta depósito judicial conjunta'},
    { id: 7, nome: 'Conta de terceiros'}
  ]);
  const [tipo_conta, setTipo_conta] = useState("");
  const [val_atualizado, setVal_atualizado] = useState("");
  const [val_indice, setVal_indice] = useState("");
  const [honor_cont, setHonor_cont] = useState("");
  const [dat_entr, setDat_entr] = useState("");
  const [hor, setHor] = useState("");
  const [dat_pasa, setDat_pasa] = useState("");
  const [monetaria, setMonetaria] = useState("");
  const [prestacao, setPrestacao] = useState("");
  const [cust_cart, setCust_cart] = useState("");
  const [obs, setObs] = useState("");
  const [parentesco, setParentesco] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [id_situacao, setId_situacao] = useState("vivo");
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [valorHerdeiro, setValorHerdeiro] = useState('');
  const [porcentagem, setPorcentagem] = useState('');
  const [selectedTipoConta, setSelectedTipoConta] = useState("");
  const [showNewFieldsType, setShowNewFieldsType] = useState(false);
  const [nome_titular, setNome_titular] = useState("");
  const [cpf_titular, setCpf_titular] = useState("");
  const [agencia_titular, setAgencia_titular] = useState("");
  const [conta_titular, setConta_titular] = useState("");
  const [grau_titularidade_titular, setGrau_titularidade_titular] = useState("");
  const [nome_terceiro, setNome_terceiro] = useState("");
  const [cpf_terceiro, setCpf_terceiro] = useState("");
  const [agencia_terceiro, setAgencia_terceiro] = useState("");
  const [conta_terceiro, setConta_terceiro] = useState("");
  const [grau_titularidade_terceiro, setGrau_titularidade_terceiro] = useState("");
  const [showNewFieldsTerceiros, setShowNewFieldsTerceiros] = useState("");

  const handleChange = (e) => {
    setConta(e.target.value);
  };

  const handleValChange = (e) => setVal(e.target.value);
  const handleValIndiceChange = (e) => setVal_indice(e.target.value);
  const handleHonorContChange = (e) => setHonor_cont(e.target.value);

  const calcularValorDescontado = (valor, honor_cont) => {
    const honorarios = parseFloat(honor_cont.replace(',', '.')) || 0;
    const valorNumerico = parseFloat(valor.replace(',', '.')) || 0;
    return valorNumerico - (valorNumerico * (honorarios / 100));
  };

  const [valorDescontado, setValorDescontado] = useState("");

  useEffect(() => {
    const valorCalculado = calcularValorDescontado(val, honor_cont);
    setValorDescontado(valorCalculado.toFixed(2).replace('.', ','));
  }, [val, honor_cont]);
  
  useEffect(() => {
    const updateDateTime = () => {
        const now = new Date();
        const date = ('0' + now.getDate()).slice(-2) + '/' +
                     ('0' + (now.getMonth() + 1)).slice(-2) + '/' +
                     now.getFullYear();
        const time = ('0' + now.getHours()).slice(-2) + ':' +
                     ('0' + now.getMinutes()).slice(-2) + ':' +
                     ('0' + now.getSeconds()).slice(-2);
        setCurrentDateTime(date + ' ' + time);
    };

    const intervalId = setInterval(updateDateTime, 1000);
    updateDateTime(); // Set the initial value

    return () => clearInterval(intervalId); // Clean up the interval on unmount
}, []);

const handleDateChange = (event) => {
  setSelectedDate(event.target.value);
};

const handleSituacaoChange = (value) => {
  setId_situacao(value);
  setShowAdditionalFields(value === "falecido");
};

const handleSelectTipoContaChange = (e) => {
  const value = e.target.value;
  setSelectedTipoConta(value);
  setShowNewFieldsType(value === "Conta corrente conjunta" || value === "Conta poupanca conjunta" || value === "Conta depósito judicial conjunta");
  setShowNewFieldsTerceiros(value === "Conta de terceiros")
};

  // Gerar opções de 1 a 1000
  const generateOptions = () => {
    const options = [];
    for (let i = 1; i <= 1000; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  // Função para lidar com o envio do formulário de cadastro de titular
  const handleSubmitTitular = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar os dados do titular
    // Exemplo: enviar para um servidor, salvar localmente, etc.
    console.log('Dados do titular enviados:', {
      nome_titular,
      cpf_titular,
      agencia_titular,
      conta_titular,
      grau_titularidade_titular
    });

    // Limpar os campos após o envio
    setNome_titular('');
    setCpf_titular('');
    setAgencia_titular('');
    setConta_titular('');
    setGrau_titularidade_titular('');
  };

const handlePorcentagemChange = (e) => {
  const value = e.target.value;
  setPorcentagem(value);
};

const calcularValorHerdeiro = () => {
  const porcentagemNumerica = parseFloat(porcentagem);
  if (isNaN(porcentagemNumerica)) {
    return 0;
  }
  return val_indice * (porcentagemNumerica / 100);
};

useEffect(() => {
  setValorHerdeiro(calcularValorHerdeiro());
}, [val_indice, porcentagem]);

  useEffect(() => {
    fetch("http://localhost:3000/api/usuarios")
      .then(response => response.json())
      .then(data => setUsuario(data))
      .catch(error => console.error("Erro ao buscar dados:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/banco/criar", { // Altere a URL para apontar para o endpoint correto no backend
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_usuario }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao enviar dados para o servidor");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Resposta do servidor:", data);
        // Aqui você pode lidar com a resposta do servidor conforme necessário
      })
      .catch((error) => console.error("Erro:", error));
  };
  
  return (
    <StyledContainer id="cadastro_pessoa">
      <StyledText>
        <h2>Cadastro de Pessoas</h2>
      </StyledText>
      <Page>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
            <StyledLabel htmlFor="inputShort">PJ</StyledLabel>
            <Input
              type="text"
              id="inputShort"
              placeholder="PJ"
              value={pj}
              onChange={(e) => setPj(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">CPF</StyledLabel>
            <Input
              type="text"
              id="inputShort"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">CNJ</StyledLabel>
            <Input
              type="text"
              id="inputShort"
              placeholder="CNJ"
              value={cnj}
              onChange={(e) => setCnj(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroupLong>
          <StyledLabel htmlFor="inputLong">Autor</StyledLabel>
          <InputAutor // Usamos um novo componente chamado LongInput para o campo "Autor"
            type="text"
            id="inputLong"
            placeholder="Autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
          />
        </FormGroupLong>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">Usuário</StyledLabel>
            <Select 
              id="inputMedium" 
              value={id_usuario} 
              onChange={(e) => setId_usuario(e.target.value)}
            >
            <option value="" disabled>Selecione um usuário</option>
              {Array.isArray(usuario) && usuario.map(usuario => (
              <option key={usuario.id} value={usuario.id}>
                {usuario.nome}
              </option>
            ))}
            </Select>
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">Banco</StyledLabel>
            <Select 
              id="inputMedium" 
              value={id_banco} 
              onChange={(e) => setId_banco(e.target.value)}
            >
            <option value="" disabled>Selecione um banco</option>
              {Array.isArray(banco) && banco.map(banco => (
              <option key={banco.id} value={banco.id}>
                {banco.nome}
              </option>
            ))}
            </Select>
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">Parceiro</StyledLabel>
            <Select 
              id="inputMedium" 
              value={id_parceiro} 
              onChange={(e) => setId_parceiro(e.target.value)}
            >
            <option value="" disabled>Selecione um parceiro</option>
              {Array.isArray(parceiro) && parceiro.map(parceiro => (
              <option key={parceiro.id} value={parceiro.id}>
                {parceiro.nome}
              </option>
            ))}
            </Select>
          </FormGroup>
          <FormGroupRadio>
            <StyledLabel htmlFor="inputShort">Habilitação de Herdeiros</StyledLabel>
              <StyledRadio>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="habilitacao"
                    id="habilitacao1"
                    value="1"
                    checked={hab_herdeiro === "1"}
                    onChange={() => setHab_herdeiro("1")}
                  />
                  <label className="form-check-label" htmlFor="habilitacao1">
                    1 - Sim
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="habilitacao"
                    id="habilitacao2"
                    value="2"
                    checked={hab_herdeiro === "2"}
                    onChange={() => setHab_herdeiro("2")}
                  />
                  <label className="form-check-label" htmlFor="habilitacao2">
                    2 - Não
                  </label>
                </div>
              </StyledRadio>
          </FormGroupRadio>
          <FormGroupRadio>
        <StyledLabel htmlFor="inputShort">Situação</StyledLabel>
        <StyledRadio>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="situacao"
              id="situacao1"
              value="vivo"
              checked={id_situacao === "vivo"}
              onChange={() => handleSituacaoChange("vivo")}
            />
            <label className="form-check-label" htmlFor="situacao1">
              1 - Vivo
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="situacao"
              id="situacao2"
              value="falecido"
              checked={id_situacao === "falecido"}
              onChange={() => handleSituacaoChange("falecido")}
            />
            <label className="form-check-label" htmlFor="situacao2">
              2 - Falecido
            </label>
          </div>
        </StyledRadio>
      </FormGroupRadio>

      {/* Campos adicionais que aparecem quando "Falecido" é selecionado */}
      {showAdditionalFields && (
        <AdditionalFields>
          <FormAdditional>
          <FormGroup>
            <StyledLabel htmlFor="nomeHerdeiro">Nome do Herdeiro</StyledLabel>
            <Input
              type="text"
              id="nomeHerdeiro"
              placeholder="Nome do Herdeiro"
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">Banco</StyledLabel>
            <Select 
              id="inputMedium" 
              value={id_banco} 
              onChange={(e) => setId_banco(e.target.value)}
            >
            <option value="" disabled>Selecione um banco</option>
              {Array.isArray(banco) && banco.map(banco => (
              <option key={banco.id} value={banco.id}>
                {banco.nome}
              </option>
            ))}
            </Select>
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">Parentesco</StyledLabel>
            <Select 
              id="inputMedium" 
              value={parentesco} 
              onChange={(e) => setParentesco(e.target.value)}
            >
            <option value="" disabled>Selecione um parentesco</option>
              {Array.isArray(parentesco) && parentesco.map(parentesco => (
              <option key={parentesco.id} value={parentesco.id}>
                {parentesco.nome}
              </option>
            ))}
            </Select>
          </FormGroup>
          <FormGroup>
        <StyledLabel htmlFor="porcentagem">Porcentagem</StyledLabel>
        <Input
          type="text"
          id="porcentagem"
          placeholder="%"
          value={porcentagem}
          onChange={handlePorcentagemChange}
        />
      </FormGroup>

      <FormGroup>
        <StyledLabel htmlFor="inputStatic">Valor %</StyledLabel>
        <Input
          type="text"
          id="inputStatic"
          name="inputValorHerdeiro"
          placeholder="0,00"
          value={valorHerdeiro.toFixed(2)}
          readOnly
        />
      </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="agencia">Agência</StyledLabel>
            <Input
              type="text"
              id="agencia"
              placeholder="Agência"
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="conta">Conta</StyledLabel>
            <Input
              type="text"
              id="conta"
              placeholder="Conta"
            />
          </FormGroup>
          <FormGroup>
      <StyledLabel htmlFor="inputMedium">Tipo de Conta</StyledLabel>
      <Select 
        id="inputMedium" 
        value={selectedTipoConta} 
        onChange={handleSelectTipoContaChange}
      >
        <option value="" disabled>Selecione um tipo de conta</option>
        {Array.isArray(id_tipo_conta) && id_tipo_conta.map(tipo => (
          <option key={tipo.nome} value={tipo.nome_titular}>
            {tipo.nome}
          </option>
        ))}
      </Select>
    </FormGroup>
          {showNewFieldsType && (
        <AdditionalFieldsType>
          <FormAdditionalType>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">Nome do Titular</StyledLabel>
            <Input
              type="text"
              id="inputShort"
              placeholder="Nome do Titular"
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">CPF do Titular</StyledLabel>
            <Input
              type="text"
              id="inputShort"
              placeholder="CPF do Titular"
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">Agência do Titular
            </StyledLabel>
            <Input
              type="text"
              id="inputShort"
              placeholder="Agência do Titular"
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">Conta do Titular</StyledLabel>
            <Input
              type="text"
              id="inputShort"
              placeholder="Conta do Titular"
            />
          </FormGroup>
          <FormGroup>
              <StyledLabel htmlFor="additionalSelect">Selecione um número</StyledLabel>
              <Select 
                id="additionalSelect"
                className="custom-select"
                value={grau_titularidade_titular}
                onChange={(e) => setGrau_titularidade_titular(e.target.value)}
                required
              >
                <option value="" disabled>Selecione um número</option>
                {generateOptions()}
              </Select>
            </FormGroup>
            <FormButtonTitular>
          <Form onSubmit={handleSubmitTitular}>
            <StyledButton type="submit">Cadastrar Titular</StyledButton>
          </Form>
          </FormButtonTitular>
          </FormAdditionalType>
          </AdditionalFieldsType>
          )}
          {showNewFieldsTerceiros  && 
                  <AdditionalFieldsType>
                  <FormAdditionalType>
                  <FormGroup>
                    <StyledLabel htmlFor="inputShort">Nome de Terceiros</StyledLabel>
                    <Input
                      type="text"
                      id="nome_terceiro"
                      placeholder="Nome do Terceiro"
                    />
                  </FormGroup>
                  <FormGroup>
                    <StyledLabel htmlFor="inputShort">CPF do Terceiro</StyledLabel>
                    <Input
                      type="text"
                      id="inputShort"
                      placeholder="CPF do Terceiro"
                      value={cpf_titular}
                      onChange={(e) => setCpf(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <StyledLabel htmlFor="inputShort">Agência do Terceiro</StyledLabel>
                    <Input
                      type="text"
                      id="inputShort"
                      placeholder="Agência do Terceiro"
                    />
                  </FormGroup>
                  <FormGroup>
                    <StyledLabel htmlFor="inputShort">Conta do Terceiro</StyledLabel>
                    <Input
                      type="text"
                      id="inputShort"
                      placeholder="Conta do Terceiro"
                    />
                  </FormGroup>
                  <FormGroup>
          <StyledLabel htmlFor="inputStatic">Grau de Titularidade do Terceiro</StyledLabel>
          <Input
            type="text"
            id="inputStatic"
            name="inputGrauTerceiro"
            placeholder="1"
            readOnly
          />
        </FormGroup>
                    <FormButtonTitular>
                  <Form onSubmit={handleSubmit}>
                    <StyledButton type="submit">Cadastrar Terceiro</StyledButton>
                  </Form>
                  </FormButtonTitular>
                  </FormAdditionalType>
                  </AdditionalFieldsType>
          }
          </FormAdditional>
          <FormButton>
          <Form onSubmit={handleSubmit}>
            <StyledButton type="submit">Enviar</StyledButton>
          </Form>
          </FormButton>
        </AdditionalFields>
      )}
          <FormGroupLong>
          <StyledLabel htmlFor="inputShort">Observação</StyledLabel>
          <LongInput // Usamos um novo componente chamado LongInput para o campo "Observação"
            type="text"
            id="inputLong"
            placeholder="Observação"
            value={obs}
            onChange={(e) => setObs(e.target.value)}
            required
          />
        </FormGroupLong>
        <FormGroup>
            <StyledLabel htmlFor="inputShort">Agência</StyledLabel>
            <Input
              type="text"
              id="inputShort"
              placeholder="Agência"
              value={agencia}
              onChange={(e) => setAgencia(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">Conta</StyledLabel>
            <Input
              type="text"
              id="inputShort"
              placeholder="Conta"
              value={conta}
              onChange={(e) => setConta(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">Valor</StyledLabel>
              <Input
                type="text"
                id="inputShort"
                name="inputVal"
                placeholder="0,00"
                value={val}
                onChange={handleValChange}
              />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">Valor Índice</StyledLabel>
              <Input
                type="text"
                id="inputShort"
                name="inputVal_indice"
                placeholder="0,00"
                value={val_indice}
                onChange={handleValIndiceChange}
              />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">Honorários Contratuais</StyledLabel>
              <Input
                type="text"
                id="inputShort"
                name="inputHonor_cont"
                placeholder="0,00"
                value={honor_cont}
                onChange={handleHonorContChange}
              />
        </FormGroup>
        <FormGroup>
          <StyledLabel htmlFor="inputStatic">Valor Atualizado</StyledLabel>
          <Input
            type="text"
            id="inputStatic"
            name="inputValorDescontado"
            placeholder="0,00"
            value={valorDescontado}
            readOnly
          />
        </FormGroup>
        <FormGroup>
            <StyledLabel htmlFor="inputShort">Tipo de Conta</StyledLabel>
            <Select 
              id="inputMedium" 
              value={id_tipo_conta} 
              onChange={(e) => setId_tipo_conta(e.target.value)}
            >
            <option value="" disabled>Selecione um tipo de conta</option>
              {Array.isArray(id_tipo_conta) && id_tipo_conta.map(id_tipo_conta => (
              <option key={id_tipo_conta.id} value={id_tipo_conta.id}>
                {id_tipo_conta.nome}
              </option>
            ))}
            </Select>
          </FormGroup>
          <FormGroup>
          <StyledLabel htmlFor="inputShort">Data e Hora de Entrada</StyledLabel>
            <Input
                type="text"
                id="inputMedium"
                name="inputCurrentDateTime"
                placeholder="DD/MM/AAAA HH:MM:SS"
                value={currentDateTime}
                readOnly
            />
        </FormGroup>
        <FormGroup>
        <StyledLabel htmlFor="inputShort">Data PASA</StyledLabel>
            <Input
                type="date"
                id="inputMedium"
                name="inputSelectDate"
                value={selectedDate}
                onChange={handleDateChange}
            />
        </FormGroup>
        <FormGroup>
            <StyledLabel htmlFor="inputShort">Monetaria</StyledLabel>
              <StyledRadio>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="monetaria"
                    id="monetaria"
                    value="1"
                    checked={monetaria === "1"}
                    onChange={() => setMonetaria("1")}
                  />
                  <label className="form-check-label" htmlFor="monetaria1">
                    1 - Sim
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="monetaria"
                    id="monetaria2"
                    value="2"
                    checked={monetaria === "2"}
                    onChange={() => setMonetaria("2")}
                  />
                  <label className="form-check-label" htmlFor="monetaria2">
                    2 - Não
                  </label>
                </div>
              </StyledRadio>
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">Custas Cartório</StyledLabel>
              <StyledRadio>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="cust_cart"
                    id="cust_cart"
                    value="1"
                    checked={cust_cart === "1"}
                    onChange={() => setCust_cart("1")}
                  />
                  <label className="form-check-label" htmlFor="cust_cart1">
                    1 - Sim
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="cust_cart"
                    id="cust_cart2"
                    value="2"
                    checked={cust_cart === "2"}
                    onChange={() => setCust_cart("2")}
                  />
                  <label className="form-check-label" htmlFor="cust_cart2">
                    2 - Não
                  </label>
                </div>
              </StyledRadio>
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="inputShort">Prestação</StyledLabel>
              <StyledRadio>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="prestacao"
                    id="prestacao"
                    value="1"
                    checked={prestacao === "1"}
                    onChange={() => setPrestacao("1")}
                  />
                  <label className="form-check-label" htmlFor="prestacao1">
                    1 - Sim
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="prestacao"
                    id="prestacao2"
                    value="2"
                    checked={prestacao === "2"}
                    onChange={() => setPrestacao("2")}
                  />
                  <label className="form-check-label" htmlFor="prestacao2">
                    2 - Não
                  </label>
                </div>
              </StyledRadio>
          </FormGroup>
      </Form>
      </Page>
      <Form onSubmit={handleSubmit}>
        <StyledButton type="submit">Enviar</StyledButton>
      </Form>
    </StyledContainer>
  );
  
};
export default InserirPoupador;

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

const Page = styled.div`
  margin-bottom: 2rem; 
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;


const FormGroup = styled.div`
  flex: 1 1 calc(30% - 1rem);
  margin-right: 0.5rem;
  align-items: center; /* Alinha os itens verticalmente no meio */
`;

const FormGroupLong = styled.div`
  flex: 1 1 calc(70% - 1rem);
  align-items: center; /* Alinha os itens verticalmente no meio */
`;

const FormGroupRadio = styled.div`
  flex: 1 1 calc(30% - 1rem);
`;

const Label = styled.label`
  display: flex;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;

  &[htmlFor="inputShort"],
  &[htmlFor="inputLong"] {
`;

const Input = styled.input`
  width: 100%; // Largura para o input padrão
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 12px;
  height: 3rem;
`;

const LongInput = styled.input`
  width: 100%; // Largura para o input longo
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 12px;
  height: 3rem;
`;

const InputAutor = styled.input`
  width: 100%; // Largura para o input longo
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 12px;
  height: 3rem;
`;


const Button = styled.button`
  padding: 0.6rem 2rem;
  background-color: #081E57;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 15rem;
  height: 3rem;
  margin: 0 auto; /* Adicionando margens automáticas para centralizar */
  align-items: center; /* Isso só terá efeito se display for flex ou grid */
  transition: background-color 0.3s;
  &:hover {
    background-color: #A36201;
  }
`;


const StyledContainer = styled(Container)`
display: flex;
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

const StyledRadio = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


const StyledButton = styled(Button)`
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: #F5F5F5;
  margin: 3rem auto  2rem auto; /* Centraliza horizontalmente */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
`;   

const Select = styled.select`
  display: flex;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-sizing: border-box;
  height: 3rem;

`;

const AdditionalFields = styled.div`
  border: 1px solid #001753;
  border-radius: 12px;
  background-color: #BFD0FB;
  padding: 2rem;
`;

const AdditionalFieldsType = styled.div`
  border-radius: 12px;
  background-color: #FEE2B9;
  border: 1px solid #A36201;
  padding: 2rem; 
`;

const FormAdditional = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  gap: 2rem;
`;

const FormAdditionalType = styled.div`  
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  gap: 2rem;
`;

const FormButton = styled.div`
`;

const FormButtonTitular = styled.div`
`;