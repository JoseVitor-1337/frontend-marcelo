import React, { useState } from "react";
import passwordVisibleIcon from "../../../assets/icons/password-visible.svg";
import passwordHiddenIcon from "../../../assets/icons/password-hidden.svg";
import "./style.css";

const PasswordInput = (props) => {
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
      <label htmlFor="password">{props.label}</label>
      <input type={type} name="password" id="password" required />
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
