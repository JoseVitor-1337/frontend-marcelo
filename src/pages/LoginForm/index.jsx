import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  CheckBoxInput,
} from "../../components/Inputs";
import { RegisterUserNavigationModal } from "../../components/Modals";

import "./style.css";

const LoginForm = () => {
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function openRegisterUserNavigationModal() {
    if (registerModalIsOpen === false) {
      setRegisterModalIsOpen(true);
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
      {registerModalIsOpen === false ? (
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
            <button className="submit" onClick={logIn}>
              Login
            </button>
            <button
              className="submit"
              onClick={openRegisterUserNavigationModal}
            >
              Novo Cadastro
            </button>
          </div>
        </div>
      ) : (
        <RegisterUserNavigationModal closeModal={setRegisterModalIsOpen} />
      )}
    </>
  );
};

export default LoginForm;
