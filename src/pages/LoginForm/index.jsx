import React from "react";
import {
  TextInput,
  PasswordInput,
  CheckBoxInput,
} from "../../components/Inputs";
import { SubmitButton } from "../../components/Buttons";
import "./style.css";

const LoginForm = () => {
  return (
    <form autoComplete="Off" className="login-form">
      <header>
        <h2>Experimentos & Pesquisas</h2>
      </header>
      <TextInput type="email" label="Login" />
      <PasswordInput label="Senha" />
      <CheckBoxInput label="Manter-se conectado" />
      <div className="buttons">
        <SubmitButton title="Login" />
        <SubmitButton title="Novo Cadastro" />
      </div>
    </form>
  );
};

export default LoginForm;
