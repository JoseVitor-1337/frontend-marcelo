import React, { memo } from "react";

import searchSVG from "../../../assets/icons/search.svg";
import "./style.css";

const ParticipantCompleteSearchItem = (props) => {
  const { search } = props;

  const { title, description, content, participantStatus, questions } = search;

  function getTheTotalOfCorrectQuestions() {
    const sumerOfRightQuestion = participantStatus.answeredQuestions.reduce(
      (accumulator, answeredQuestion) => {
        if (answeredQuestion.correct === 1) {
          return accumulator + 1;
        } else {
          return accumulator;
        }
      },
      0
    );

    return sumerOfRightQuestion;
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
      <div className="complet-search-content content">
        <div className="description">
          <h3>Conteudo</h3>
          <p>{content}</p>
        </div>
        <div className="search-info">
          <div className="circle">
            <h2>{`${getTheTotalOfCorrectQuestions()}/${questions.length}`}</h2>
          </div>
          <span>Resultado</span>
        </div>
      </div>
    </div>
  );
};

export default memo(ParticipantCompleteSearchItem);
