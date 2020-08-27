import React, { memo } from "react";
import searchSVG from "../../../assets/icons/search.svg";
import "./style.css";

const AdministerSearchItem = (props) => {
  const { openDetailModal } = props;

  return (
    <div className="search-item">
      <header>
        <img src={searchSVG} alt="Iconi de Pesquisa" />
        <div className="description">
          <h2>Psícologia Reversa</h2>
          <span>Uma breve descrição sobre a pesquisa trabalhada</span>
        </div>
      </header>
      <div className="content">
        <div className="researcher-info">
          <p>Professor(a): Wender Silva</p>
          <p>Curso: Ciências da computação</p>
          <p>Escolaridade: Pós-doutorado</p>
        </div>
        <div className="details">
          <button onClick={openDetailModal}>Ver Detalhes</button>
        </div>
      </div>
    </div>
  );
};

export default memo(AdministerSearchItem);
