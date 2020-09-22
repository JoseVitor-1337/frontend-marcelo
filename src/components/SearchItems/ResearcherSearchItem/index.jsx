import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../Buttons";
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
      <div className="researcher-content content">
        <Button
          type="search-item"
          title="Adicionar Estudante"
          action={() => openModal("ID")}
        />
        <Button
          type="search-item"
          title="Editar pesquisa"
          action={handleUpdateSearch}
        />

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
