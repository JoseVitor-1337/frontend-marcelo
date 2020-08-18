import React from "react";
import { NavigationButton } from "../../Buttons";
import "./style.css";

import closeIcon from "../../../assets/icons/close.svg";

const RegisterUserNavigationModal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <img
          onClick={() => closeModal(false)}
          className="close-icon"
          src={closeIcon}
          alt="Close"
        />

        <div className="modal-header">
          <h2>Qual cadastro você gostaria de fazer?</h2>
        </div>

        <div className="modal-body">
          <NavigationButton title="Participante" />
          <NavigationButton title="Pesquisador" />
        </div>
      </div>
    </div>
  );
};

export { RegisterUserNavigationModal };
