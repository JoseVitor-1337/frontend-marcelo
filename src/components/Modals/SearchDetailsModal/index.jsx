import React, { memo } from "react";
import { Button } from "../../Buttons";
import searchSVG from "../../../assets/icons/search.svg";
import "./style.css";

const SearchDetailsModal = (props) => {
  const { closeModal, search } = props;

  console.log(search);

  const { title, description, researcher, participants, questions } = search;

  const {
    fullName,
    course,
    schooling,
    univercityName,
    univercityType,
    state,
    email,
  } = researcher;

  return (
    <div className="search-details-modal">
      <div className="modal-content">
        <div className="go-back">
          <Button
            type="navigation"
            title="Voltar"
            action={() => closeModal(false)}
          />
        </div>

        <header>
          <img src={searchSVG} alt="Iconi de Pesquisa" />
          <div className="description">
            <h2>{title}</h2>
            <span>{description}</span>
          </div>
        </header>

        <div className="modal-body">
          <div className="researcher-details">
            <h3>Pesquisador</h3>
            <p>Professor(a): {fullName}</p>
            <p>Curso: {course}</p>
            <p>Escolaridade: {schooling}</p>
            <p>Nome da univercidade: {univercityName}</p>
            <p>Tipo da univercidade(a): {univercityType}</p>
            <p>Estado: {state}</p>
            <p>Email: {email}</p>
          </div>
          <div className="search-details">
            <div className="search-info">
              <div className="circle">
                <h2>{participants.length}</h2>
              </div>
              <span>Participantes</span>
            </div>
            <div className="search-info">
              <div className="circle">
                <h2>{questions.length}</h2>
              </div>
              <span>Perguntas</span>
            </div>
            <div className="search-info">
              <div className="circle">
                <h2>72%</h2>
              </div>
              <span>Acertos</span>
            </div>
            <div className="search-info">
              <div className="circle">
                <h2>28%</h2>
              </div>
              <span>Erros</span>
            </div>
          </div>
          <Button type="submit" title="Gerar CSV" action={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default memo(SearchDetailsModal);
