import React, { memo } from "react";
import userSVG from "../../../assets/icons/user.svg";
import plusSVG from "../../../assets/icons/plus.svg";
import "./style.css";

const ParticipantItem = (props) => {
  return (
    <div className="participant-item">
      <header>
        <img src={userSVG} alt="Iconi de Usuário" />
        <div className="description">
          <h2>João Carlos da Silva Queiroz</h2>
          <span>Mestiço, classe média</span>
        </div>
      </header>
      <div className="content">
        <div className="participant-info">
          <p>Univercidade Estadual de Roraima</p>
          <p>Curso: Ciências da computação</p>
          <p>Escolaridade: Ensino superior</p>
          <p>Estado: Roraiam</p>
        </div>
        <div className="details">
          <img src={plusSVG} alt="Icone de soma" />
        </div>
      </div>
    </div>
  );
};

export default memo(ParticipantItem);
