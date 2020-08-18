import React from "react";
import { TextInput, PasswordInput } from "../../components/Inputs";
import { CheckBoxButton, SubmitButton } from "../../components/Buttons";
import "./style.css";

const LoginForm = () => {
  return (
    <form>
      <header>
        <h2>Experimentos & Pesquisas</h2>
      </header>
      <TextInput />
      <PasswordInput />
      <CheckBoxButton />
      <div>
        <SubmitButton />
        <SubmitButton />
      </div>
    </form>
  );
};

export default LoginForm;
