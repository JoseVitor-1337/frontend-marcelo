import React, { useState, memo } from "react";
import passwordVisibleIcon from "../../../assets/icons/password-visible.svg";
import passwordHiddenIcon from "../../../assets/icons/password-hidden.svg";
import "./style.css";

const PasswordInput = ({ label, name, value, setValue, password }) => {
  const [passwordIcon, setPasswordIcon] = useState({
    icon: passwordHiddenIcon,
    type: "password",
  });

  function changePasswordVisibility() {
    if (passwordIcon.icon === passwordHiddenIcon) {
      setPasswordIcon({
        icon: passwordVisibleIcon,
        type: "text",
      });
    } else {
      setPasswordIcon({
        icon: passwordHiddenIcon,
        type: "password",
      });
    }
  }

  function passwordIsEqualToConfirmPassword() {
    if (password === undefined) {
      return null;
    }

    const spans = document.getElementsByClassName("spans");
    const passwordInputs = document.getElementsByClassName("password");

    if (password === value) {
      for (const input of passwordInputs) {
        input.classList.remove("input-error");
      }
      for (const span of spans) {
        span.classList.remove("span-error");
      }
    } else {
      for (const input of passwordInputs) {
        input.classList.add("input-error");
      }
      for (const span of spans) {
        span.classList.add("span-error");
      }
    }
  }

  const { icon, type } = passwordIcon;

  return (
    <div className="input-group">
      <label htmlFor={name}>
        {label}{" "}
        <span className="spans">
          (Senha e Confirmar Senha devem ser iguais!)
        </span>
      </label>
      <input
        onBlur={passwordIsEqualToConfirmPassword}
        type={type}
        name={name}
        className="password"
        id={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required
      />
      <img
        onClick={changePasswordVisibility}
        className="password-icon"
        src={icon}
        alt="Icon"
      />
    </div>
  );
};

export default memo(PasswordInput);
