import React, { useEffect, useState } from "react";
import { NavigationHeader } from "../../components/Navigation";
import { SearchInput } from "../../components/Inputs";
import { Pagination } from "../../components/Paginations";
import { ParticipantPendentSearchItem } from "../../components/SearchItems";
import { SearchDetailsModal } from "../../components/Modals";
import "./style.css";

const ParticipantPendentSearchs = () => {
  const [searchs, setSearchs] = useState([]);
  const [filter, setFilter] = useState(``);
  const [searchDetailModalIsOpent, setSearchDetailModalIsOpent] = useState(
    false
  );

  useEffect(() => {
    setSearchs([
      {
        researcher: {
          fullName: "Wender Silva",
          course: "Psicologia",
          univercityName: "Universidade Estadual de Roraima",
        },
        title: "Psicologia Reversa",
        description: "Uma breve descrição sobre a pesquisa trabalhada",
        content: "Aqui estará o conteudo que a pesquisa aborda",
        questions: [
          {
            type: "Tipo da pergunta",
            structure: "estrutura",
            stimulus: "Estimulo",
            question: "A pergunta em si",
            alternatives: [
              {
                option: "A",
                answer: "resposta",
                correct: true,
                image: "image (se tiver)",
              },
            ],
          },
        ],
      },
    ]);
  }, [filter]);

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
                <ParticipantPendentSearchItem search={search} key={index} />
              );
            })}
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
