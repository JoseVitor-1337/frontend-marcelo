import React, { useState, memo } from "react";
import { PaginationInSearchs } from "../../Paginations";
import { ParticipantItem } from "../../Participants";
import { SearchInput } from "../../Inputs";
import { Button } from "../../Buttons";
import "./style.css";

import searchIcon from "../../../assets/icons/search.svg";

const AddParticipantIntoSearchModal = ({ closeModal, searchId }) => {
  const [filter, setFilter] = useState(``);

  console.log(searchId);

  return (
    <div className="add-participant-modal">
      <div className="modal-content">
        <div className="go-back">
          <Button
            type="submit"
            title="Voltar"
            action={() => closeModal(false)}
          />
        </div>

        <div className="modal-header">
          <img src={searchIcon} alt="Iconi de Pesquisa" />
          <div id="description">
            <h2>Psicologia Reversa</h2>
            <span>Uma breve descrição sobre a pesquisa trabalhada.</span>
          </div>
        </div>

        <SearchInput
          name="search"
          value={filter}
          setValue={setFilter}
          placeholder="Procurar por estudantes"
        />

        <div className="modal-body">
          <ParticipantItem />
          <ParticipantItem />
          <ParticipantItem />
          <ParticipantItem />
        </div>

        <PaginationInSearchs maxItems={40} itemsPerPage={4} />
      </div>
    </div>
  );
};

export default memo(AddParticipantIntoSearchModal);
