import React, { useState } from "react";
import { NavigationHeader } from "../../components/Navigation";
import { SearchInput } from "../../components/Inputs";
import { Pagination } from "../../components/Paginations";
import { ParticipantPendentSearchItem } from "../../components/SearchItems";
import { SearchDetailsModal } from "../../components/Modals";
import "./style.css";

const ParticipantPendentSearchs = () => {
  const [filter, setFilter] = useState(``);
  const [searchDetailModalIsOpent, setSearchDetailModalIsOpent] = useState(
    false
  );

  const navigationItems = [
    {
      to: "/participant/pendent_searchs",
      title: "Pendentes",
    },
    {
      to: "/participant/complet_searchs",
      title: "Concluídas",
    },
    {
      to: "/",
      title: "Sair",
    },
  ];

  return (
    <>
      {searchDetailModalIsOpent === false ? (
        <>
          <NavigationHeader items={navigationItems} />
          <SearchInput
            nama="Search"
            placeholder="Procurar suas pesquisas"
            value={filter}
            setValue={setFilter}
          />
          <div className=" searchs-item-container">
            <ParticipantPendentSearchItem />
            <ParticipantPendentSearchItem />
            <ParticipantPendentSearchItem />
            <ParticipantPendentSearchItem />
          </div>
          <Pagination maxItems={40} itemsPerPage={4} />
        </>
      ) : (
        <SearchDetailsModal closeModal={setSearchDetailModalIsOpent} />
      )}
    </>
  );
};

export default ParticipantPendentSearchs;
