import React, { memo } from "react";

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
        <button>Iniciar Sessão</button>
      </div>
    </div>
  );
};

export default memo(ParticipantPendentSearchItem);
