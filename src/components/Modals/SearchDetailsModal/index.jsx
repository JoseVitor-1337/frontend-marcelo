import React, { memo } from "react";

import searchSVG from "../../../assets/icons/search.svg";
import "./style.css";

import closeIcon from "../../../assets/icons/close.svg";

const SearchDetailsModal = ({ closeModal, search }) => {
  console.log(search);

  return (
    <div className="search-details-modal">
      <div className="modal-content">
        <img
          onClick={() => closeModal(false)}
          className="close-icon"
          src={closeIcon}
          alt="Close"
        />

        <header>
          <img src={searchSVG} alt="Iconi de Pesquisa" />
          <div className="description">
            <h2>Psícologia Reversa</h2>
            <span>Uma breve descrição sobre a pesquisa trabalhada</span>
          </div>
        </header>

        <div className="modal-body">
          <div className="researcher-details">
            <h3>Pesquisador</h3>
            <p>Professor(a): Wender Silva</p>
            <p>Curso: Ciências da computação</p>
            <p>Escolaridade: mestrado</p>
            <p>Nome da univercidade: Univercidade Estadual de Roraima</p>
            <p>Tipo da univercidade(a): Pública</p>
            <p>Estado: Roraima</p>
            <p>Email: wendersilva@gmail.com</p>
          </div>
          <div className="search-details">
            <div className="search-info">
              <div className="circle">
                <h2>87</h2>
              </div>
              <span>Participantes</span>
            </div>
            <div className="search-info">
              <div className="circle">
                <h2>20</h2>
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
            <button>Gerar CSV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SearchDetailsModal);
