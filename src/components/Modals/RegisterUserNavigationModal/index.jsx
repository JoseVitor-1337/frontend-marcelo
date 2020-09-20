import React, { memo } from "react";

import { useHistory } from "react-router-dom";
import "./style.css";

import closeIcon from "../../../assets/icons/close.svg";

const RegisterUserNavigationModal = ({ closeModal }) => {
  const navigation = useHistory();

  function goToParticipantRegister() {
    navigation.push("/register/participant");
  }

  function goToResearcherRegister() {
    navigation.push("/register/researcher");
  }

  return (
    <div className="register-modal">
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
          <button onClick={goToParticipantRegister}>Participante</button>
          <button onClick={goToResearcherRegister}>Pesquisador</button>
        </div>
      </div>
    </div>
  );
};

export default memo(RegisterUserNavigationModal);
