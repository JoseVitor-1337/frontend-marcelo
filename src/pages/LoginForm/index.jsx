import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  CheckBoxInput,
} from "../../components/Inputs";
import { RegisterUserNavigationModal } from "../../components/Modals";
import { SubmitButton } from "../../components/Buttons";
import "./style.css";

const LoginForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function openRegisterUserNavigationModal() {
    if (modalOpen === false) {
      setModalOpen(true);
    }
  }

  function logIn() {
    console.log({
      email,
      password,
    });
  }

  return (
    <>
      {modalOpen === false ? (
        <div autoComplete="Off" className="login-form">
          <header>
            <h2>Experimentos & Pesquisas</h2>
          </header>
          <TextInput
            value={email}
            setValue={setEmail}
            name="email"
            label="Login"
          />
          <PasswordInput
            value={password}
            setValue={setPassword}
            name="password"
            label="Senha"
          />
          <CheckBoxInput label="Manter-se conectado" />
          <div className="buttons">
            <SubmitButton action={logIn} title="Login" />
            <SubmitButton
              action={openRegisterUserNavigationModal}
              title="Novo Cadastro"
            />
          </div>
        </div>
      ) : (
        <RegisterUserNavigationModal closeModal={setModalOpen} />
      )}
    </>
  );
};

export default LoginForm;
