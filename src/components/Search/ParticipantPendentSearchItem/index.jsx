import React, { memo } from "react";
import { RectButton } from "../../Buttons";
import searchSVG from "../../../assets/icons/search.svg";
import "./style.css";

const ParticipantPendentSearchItem = (props) => {
  return (
    <div className="participant-search search-item">
      <header>
        <img src={searchSVG} alt="Iconi de Pesquisa" />
        <div className="description">
          <h2>Psícologia Reversa</h2>
          <span>Uma breve descrição sobre a pesquisa trabalhada</span>
        </div>
      </header>
      <div className="pendent-search-content content">
        <RectButton title="Iniciar sessão" />
      </div>
    </div>
  );
};

export default memo(ParticipantPendentSearchItem);
