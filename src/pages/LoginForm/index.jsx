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

  function openRegisterUserNavigationModal() {
    if (modalOpen === false) {
      setModalOpen(true);
    }
  }

  function logIn() {
    alert("Login");
  }

  return (
    <>
      {modalOpen === false ? (
        <div onSubmit={logIn} autoComplete="Off" className="login-form">
          <header>
            <h2>Experimentos & Pesquisas</h2>
          </header>
          <TextInput type="email" label="Login" />
          <PasswordInput label="Senha" />
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
