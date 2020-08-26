import React, { memo } from "react";
import { RectButton } from "../../Buttons";
import searchSVG from "../../../assets/icons/search.svg";
import "./style.css";

const ParticipantCompletSearchItem = (props) => {
  return (
    <div className="participant-search search-item">
      <header>
        <img src={searchSVG} alt="Iconi de Pesquisa" />
        <div className="description">
          <h2>Psícologia Reversa</h2>
          <span>Uma breve descrição sobre a pesquisa trabalhada</span>
        </div>
      </header>
      <div className="complet-search-content content">
        <div className="description">
          <h3>Conteudo</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            repellendus, reiciendis optio natus ea dignissimos
          </p>
        </div>
        <div className="search-info">
          <div className="circle">
            <h2>10/12</h2>
          </div>
          <span>Resultado</span>
        </div>
      </div>
    </div>
  );
};

export default memo(ParticipantCompletSearchItem);
