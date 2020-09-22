import React, { memo } from "react";
import searchSVG from "../../../assets/icons/search.svg";
import { Button } from "../../Buttons";
import "./style.css";

const AdministerSearchItem = (props) => {
  const { openDetailModal, search } = props;

  const { title, description, researcher } = search;

  const { fullName, course, schooling } = researcher;

  return (
    <div className="search-item">
      <header>
        <img src={searchSVG} alt="Iconi de Pesquisa" />
        <div className="description">
          <h2>{title}</h2>
          <span>{description}</span>
        </div>
      </header>
      <div className="content">
        <div className="researcher-info">
          <p>Professor(a): {fullName}</p>
          <p>Curso: Ciências {course}</p>
          <p>Escolaridade: {schooling}</p>
        </div>
        <div className="details">
          <Button
            type="search-item"
            title="Ver Detalhes"
            action={() => openDetailModal(search)}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(AdministerSearchItem);
