import React, { memo } from "react";
import userSVG from "../../../assets/icons/user.svg";
import { Button } from "../../Buttons";
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
          <Button
            type="submit"
            title="Adicionar na Pesquisa"
            action={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ParticipantItem);
