import React, { memo } from "react";
import { Button } from "../../Buttons";
import searchSVG from "../../../assets/icons/search.svg";
import "./style.css";

const ParticipantPendentSearchItem = (props) => {
  const { search } = props;

  const { title, description, researcher } = search;

  const { fullName, univercityName, course } = researcher;

  function initSearchSession() {
    console.log(search);
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
      <div className="pendent-search-content content">
        <div className="info">
          <p>Professor(a): {fullName}</p>
          <p>Universidade: {univercityName}</p>
          <p>Curso: {course}</p>
        </div>

        <Button
          type="search-item"
          title="Iniciar Sessão"
          action={initSearchSession}
        />
      </div>
    </div>
  );
};

export default memo(ParticipantPendentSearchItem);
