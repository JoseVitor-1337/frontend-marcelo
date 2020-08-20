import React, { useState } from "react";
import passwordVisibleIcon from "../../../assets/icons/password-visible.svg";
import passwordHiddenIcon from "../../../assets/icons/password-hidden.svg";
import "./style.css";

const PasswordInput = ({ label, name, password }) => {
  const [passwordIcon, setPasswordIcon] = useState({
    icon: passwordHiddenIcon,
    type: "password",
  });

  function changePasswordVisibilit() {
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

  const { icon, type } = passwordIcon;

  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} required />
      <img
        onClick={changePasswordVisibilit}
        className="password-icon"
        src={icon}
        alt="Icon"
      />
    </div>
  );
};

export { PasswordInput };
