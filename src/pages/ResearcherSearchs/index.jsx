import React, { useEffect, useState } from "react";
import { NavigationHeader } from "../../components/Navigation";
import { SearchInput } from "../../components/Inputs";
import { PaginationSearchItems } from "../../components/Paginations";
import { ResearcherSearchItem } from "../../components/SearchItems";
import { AddParticipantIntoSearchModal } from "../../components/Modals";
import "./style.css";

const ResearcherSearchs = () => {
  const [filter, setFilter] = useState(``);
  const [searchId, setSearchId] = useState("");
  const [
    addParticipantIntoSearchModalIsOpen,
    setAddParticipantIntoSearchModalIsOpen,
  ] = useState(false);

  function openAddParticipantIntoSearchModal(searchId) {
    setAddParticipantIntoSearchModalIsOpen(true);
    setSearchId(searchId);
  }

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const navigationItems = [
    {
      to: "/researcher/searchs",
      title: "Pesquisas",
    },
    {
      to: "/researcher/create",
      title: "Criar Pesquisa",
    },
    {
      to: "/",
      title: "Sair",
    },
  ];

  return (
    <>
      {addParticipantIntoSearchModalIsOpen === false ? (
        <>
          <NavigationHeader items={navigationItems} />
          <SearchInput
            nama="Search"
            placeholder="Procurar suas pesquisas"
            value={filter}
            setValue={setFilter}
          />
          <div className="searchs-item-container">
            <ResearcherSearchItem
              openModal={openAddParticipantIntoSearchModal}
            />
            <ResearcherSearchItem
              openModal={openAddParticipantIntoSearchModal}
            />
            <ResearcherSearchItem
              openModal={openAddParticipantIntoSearchModal}
            />
            <ResearcherSearchItem
              openModal={openAddParticipantIntoSearchModal}
            />
          </div>
          <PaginationSearchItems maxItems={40} itemsPerPage={4} />
        </>
      ) : (
        <AddParticipantIntoSearchModal
          searchId={searchId}
          closeModal={setAddParticipantIntoSearchModalIsOpen}
        />
      )}
    </>
  );
};

export default ResearcherSearchs;
