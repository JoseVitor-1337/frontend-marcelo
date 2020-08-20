import React, { useState, useEffect } from "react";
import { SubmitButton } from "../../components/Buttons";
import { TextInput, PasswordInput } from "../../components/Inputs";
import { Select } from "../../components/Selects";
import axios from "axios";
import "./style.css";

const ParticipantForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [univercityName, setUnivercityName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [selectedState, setSelectedState] = useState("");
  const [selectedUnivercityType, setSelectedUnivercityType] = useState("");
  const [selectedEthnicType, setSelectedEthnicType] = useState("");
  const [selectedSchooling, setSelectedSchooling] = useState("");
  const [selectedSex, setSelectedSex] = useState("");

  const [states, setStates] = useState([]);
  const [schooling] = useState([
    "Educação básica",
    "Educação fundamental",
    "Ensino médio",
    "Ensino superior",
  ]);
  const [univercityOrSchoolType] = useState(["Pública", "Privada"]);
  const [ethnicClassification] = useState([
    "Preto",
    "Amarelo",
    "Branco",
    "Pardo",
    "Mestiço",
  ]);
  const [sex] = useState([
    "Masculino",
    "Feminino",
    "Branco",
    "Pardo",
    "Mestiço",
  ]);

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        const UFacronyms = response.data.map((state) => state.sigla);

        setStates(UFacronyms);
      });
  }, []);

  function registerNewParticipant() {
    console.log({
      name,
      age,
      selectedSex,
      course,
      email,
      password,
      selectedState,
      selectedUnivercityType,
      selectedEthnicType,
      selectedSchooling,
    });
  }

  return (
    <div className="register-container">
      <header>
        <h2>Participante</h2>
      </header>
      <form autoComplete="Off">
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
            type="univercityOrSchoolName"
            label="Univercidade ou escola"
          />
          <TextInput
            value={course}
            setValue={setCourse}
            name="course"
            pattern="^[a-zA-Z][^0-9]{4,}$"
            label="Curso"
          />

          <div className="form-select-group">
            <Select
              options={schooling}
              value={selectedSchooling}
              setValue={setSelectedSchooling}
              label="Escolaridade"
            />
            <Select
              options={univercityOrSchoolType}
              value={selectedUnivercityType}
              setValue={setSelectedUnivercityType}
              label="Tipo de instituição"
            />
          </div>

          <div className="form-select-group">
            <TextInput
              name="age"
              pattern="^[1-9]{1}[1-9]{0,1}$"
              value={age}
              setValue={setAge}
              label="Idade"
            />
            <Select
              options={sex}
              value={selectedSex}
              setValue={setSelectedSex}
              label="Sexo"
            />
          </div>
        </div>

        <div className="second-form-group">
          <Select
            options={ethnicClassification}
            value={selectedEthnicType}
            setValue={setSelectedEthnicType}
            label="Classificação éticno-racial"
          />
          <Select
            options={states}
            value={selectedState}
            setValue={setSelectedState}
            label="Estado"
          />
          <TextInput
            value={email}
            setValue={setEmail}
            pattern="^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$"
            name="email"
            label="Email"
          />
          <PasswordInput
            value={password}
            setValue={setPassword}
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
        </div>

        <div className="submit">
          <SubmitButton title="Cadastrar-se" />
        </div>
      </form>
    </div>
  );
};

export default ParticipantForm;
