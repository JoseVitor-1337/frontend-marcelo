import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import searchSVG from "../../../assets/icons/search.svg";
import "./style.css";

const ResearcherSearchItem = (props) => {
  const navigation = useHistory();

  const { openModal, search } = props;

  const { title, description, participants } = search;

  function handleUpdateSearch() {
    // Passar ID

    navigation.push("/researcher/create");
  }

  return (
    <div className="participant-search search-item">
      <header>
        <img src={searchSVG} alt="Iconi de Pesquisa" />
        <div className="description">
          <h2>{title}</h2>
          <span>{description}</span>
        </div>
      </header>
      <div className="researcher-content conten t">
        <button onClick={() => openModal("ID")} className="circle">
          Adicionar estudante
        </button>

        <button onClick={handleUpdateSearch} className="circle">
          Editar pesquisa
        </button>
        <div className="search-info">
          <div className="circle">
            <h2>{participants.length}</h2>
          </div>
          <p>Participantes</p>
        </div>
      </div>
    </div>
  );
};

export default memo(ResearcherSearchItem);
