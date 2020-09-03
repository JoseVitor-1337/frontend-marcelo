import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { TextInput, PasswordInput, Select } from "../../components/Inputs";

import axios from "axios";
import "./style.css";

const ResearcherForm = () => {
  const navigation = useHistory();

  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [univercityName, setUnivercityName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [selectedState, setSelectedState] = useState("");
  const [selectedUnivercityType, setSelectedUnivercityType] = useState("");
  const [selectedSchooling, setSelectedSchooling] = useState("");

  const [schooling] = useState([
    "Educação básica",
    "Educação fundamental",
    "Ensino médio",
    "Ensino superior",
  ]);
  const [states, setStates] = useState([]);
  const [univercityOrSchoolType] = useState(["Pública", "Privada"]);

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        const UFacronyms = response.data.map((state) => state.sigla);

        setStates(UFacronyms);
      });
  }, []);

  function goBackToLoginPage() {
    navigation.push("/");
  }

  function registerNewParticipant(event) {
    event.preventDefault();

    console.log({
      name,
      dateOfBirth,
      cpf,
      email,
      password,
      selectedState,
      selectedUnivercityType,
      selectedSchooling,
    });
  }

  return (
    <div className="register-container">
      <header>
        <h2>Pesquisador</h2>
        <div className="go-back">
          <button onClick={goBackToLoginPage} className="navigation">
            Voltar ao Login
          </button>
        </div>
      </header>
      <form onSubmit={registerNewParticipant} autoComplete="Off">
        <div className="first-form-group">
          <TextInput
            type="name"
            name="name"
            label="Nome completo"
            value={name}
            setValue={setName}
          />
          <TextInput
            value={univercityName}
            setValue={setUnivercityName}
            pattern="^[a-zA-Z][^0-9]{4,}$"
            name="univercity"
            label="Universidade"
          />

          <div className="form-select-group">
            <Select
              name="schooling"
              options={schooling}
              value={selectedSchooling}
              setValue={setSelectedSchooling}
              label="Escolaridade"
            />
            <Select
              name="univercityOrSchoolType"
              options={univercityOrSchoolType}
              value={selectedUnivercityType}
              setValue={setSelectedUnivercityType}
              label="Tipo de instituição"
            />
          </div>

          <TextInput
            name="dateOfBirth"
            pattern="^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$"
            value={dateOfBirth}
            setValue={setDateOfBirth}
            label="Data de nascimento"
          />

          <TextInput
            value={cpf}
            setValue={setCpf}
            pattern="^[\d]{3}[.][\d]{3}[.][\d]{3}[-][\d]{2}$"
            name="cpf"
            label="CPF"
          />
        </div>

        <div className="second-form-group">
          <Select
            name="state"
            options={states}
            value={selectedState}
            setValue={setSelectedState}
            label="Estado"
          />
          <TextInput
            value={email}
            setValue={setEmail}
            pattern="^[\d\D]{4,}[@][a-z]{2,}[.][a-z]{2,}$"
            name="email"
            label="Email"
          />
          <PasswordInput
            value={password}
            setValue={setPassword}
            password={confirmPassword}
            name="password"
            label="Senha"
          />
          <PasswordInput
            value={confirmPassword}
            setValue={setConfirmPassword}
            password={password}
            name="confirmPasswrod"
            label="Confirmar Senha"
          />

          <div className="submit researcher-submit">
            <button className="submit">Cadastrar-se</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResearcherForm;
