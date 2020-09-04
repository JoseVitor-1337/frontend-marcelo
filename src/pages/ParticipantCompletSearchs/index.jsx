import React, { useEffect, useState } from "react";
import { NavigationHeader } from "../../components/Navigation";
import { SearchInput } from "../../components/Inputs";
import { PaginationSearchItems } from "../../components/Paginations";
import { ParticipantCompletSearchItem } from "../../components/SearchItems";
import { SearchDetailsModal } from "../../components/Modals";
import "./style.css";

const ParticipantCompletSearchs = () => {
  const [searchs, setSearchs] = useState([]);
  const [filter, setFilter] = useState(``);
  const [searchDetailModalIsOpent, setSearchDetailModalIsOpent] = useState(
    false
  );

  useEffect(() => {
    setSearchs([
      {
        title: "Psicologia Reversa",
        description: "Uma breve descrição sobre a pesquisa trabalhada",
        content: "Aqui estará o conteudo que a pesquisa aborda",
        questions: [0, 1, 2, 3, 5],
        participantStatus: {
          participantId: "1",
          answeredQuestions: [
            {
              numberOfQuestion: 1,
              correct: 0,
              answer: "Alo Você",
            },
            {
              numberOfQuestion: 2,
              correct: 1,
              answer: "Você",
            },
            {
              numberOfQuestion: 3,
              correct: 0,
              answer: "Alo ",
            },
          ],
          status: "Complete",
          attempts: 1,
        },
      },
    ]);
  }, []);

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
            {searchs.map((search, index) => {
              return (
                <ParticipantCompletSearchItem key={index} search={search} />
              );
            })}
          </div>
          <PaginationSearchItems maxItems={40} itemsPerPage={4} />
        </>
      ) : (
        <SearchDetailsModal closeModal={setSearchDetailModalIsOpent} />
      )}
    </>
  );
};

export default ParticipantCompletSearchs;
