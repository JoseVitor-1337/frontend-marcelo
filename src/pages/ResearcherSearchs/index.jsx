import React, { useEffect, useState } from "react";
import { NavigationHeader } from "../../components/Navigation";
import { SearchInput } from "../../components/Inputs";
import { PaginationInSearchs } from "../../components/Paginations";
import { ResearcherSearchItem } from "../../components/SearchItems";
import { AddParticipantIntoSearchModal } from "../../components/Modals";
import "./style.css";

const ResearcherSearchs = () => {
  const [searchs, setSearchs] = useState([]);
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

  useEffect(() => {
    setSearchs([
      {
        researcher: "1",
        title: "Psicologia Reversa",
        description: "Uma breve descrição sobre a pesquisa trabalhada",
        status: [
          {
            participant: "1",
            answeredQuestions: Array(10).fill(0),
            attempts: 1,
          },
        ],
        participants: Array(87).fill(0),
        questions: Array(10).fill(0),
      },
    ]);
  }, []);

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
            {searchs.map((search) => {
              return (
                <ResearcherSearchItem
                  search={search}
                  openModal={openAddParticipantIntoSearchModal}
                />
              );
            })}
          </div>
          <PaginationInSearchs maxItems={40} itemsPerPage={4} />
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
