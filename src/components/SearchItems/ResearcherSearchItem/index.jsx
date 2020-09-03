import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import searchSVG from "../../../assets/icons/search.svg";
import "./style.css";

const ResearcherSearchItem = (props) => {
  const navigation = useHistory();
  const { openModal } = props;

  function handleUpdateSearch() {
    // Passar ID

    navigation.push("/researcher/create");
  }

  return (
    <div className="participant-search search-item">
      <header>
        <img src={searchSVG} alt="Iconi de Pesquisa" />
        <div className="description">
          <h2>Psícologia Reversa</h2>
          <span>Uma breve descrição sobre a pesquisa trabalhada</span>
        </div>
      </header>
      <div className="researcher-content content">
        <button onClick={() => openModal("ID")} className="circle">
          Adicionar estudante
        </button>
        <button className="circle">Abrir sessão</button>
        <button onClick={handleUpdateSearch} className="circle">
          Editar pesquisa
        </button>
        <div className="search-info">
          <div className="circle">
            <h2>27</h2>
          </div>
          <p>Participantes</p>
        </div>
      </div>
    </div>
  );
};

export default memo(ResearcherSearchItem);