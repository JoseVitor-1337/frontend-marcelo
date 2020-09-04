import React, { useEffect, useState } from "react";
import { NavigationHeader } from "../../components/Navigation";
import { SearchInput } from "../../components/Inputs";
import { PaginationInSearchs } from "../../components/Paginations";
import { AdministerSearchItem } from "../../components/SearchItems";
import { SearchDetailsModal } from "../../components/Modals";
import "./style.css";

const AdministerHome = () => {
  const [filter, setFilter] = useState(``);
  const [searchs, setSearchs] = useState([]);
  const [searchToDetail, setSearchToDetail] = useState([]);
  const [searchDetailModalIsOpent, setSearchDetailModalIsOpent] = useState(
    false
  );

  function handleFilterOnSearchs(value) {
    console.log(`value: ${value}`);
  }

  useEffect(() => {
    setSearchs([
      {
        researcher: {
          fullName: "Wender Silva",
          course: "Ciêncuias da computação",
          schooling: "Pós-doutorado",
          univercityName: "Universidade Estadual de Roraima",
          univercityType: "Privada",
          state: "Roraima",
          email: "wendersilva@gmail.com",
        },
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
      {
        researcher: {
          fullName: "Wender Silva",
          course: "Ciêncuias da computação",
          schooling: "Pós-doutorado",
          univercityName: "Universidade Estadual de Roraima",
          univercityType: "Privada",
          state: "Roraima",
          email: "wendersilva@gmail.com",
        },
        title: "Psicologia Reversa",
        description: "Uma breve descrição sobre a pesquisa trabalhada",
        status: [{}],
        participants: Array(87).fill(0),
        questions: Array(10).fill(0),
      },
      {
        researcher: {
          fullName: "Wender Silva",
          course: "Ciêncuias da computação",
          schooling: "Pós-doutorado",
          univercityName: "Universidade Estadual de Roraima",
          univercityType: "Privada",
          state: "Roraima",
          email: "wendersilva@gmail.com",
        },
        title: "Psicologia Reversa",
        description: "Uma breve descrição sobre a pesquisa trabalhada",
        status: [{}],
        participants: Array(87).fill(0),
        questions: Array(10).fill(0),
      },
      {
        researcher: {
          fullName: "Wender Silva",
          course: "Ciêncuias da computação",
          schooling: "Pós-doutorado",
          univercityName: "Universidade Estadual de Roraima",
          univercityType: "Privada",
          state: "Roraima",
          email: "wendersilva@gmail.com",
        },
        title: "Psicologia Reversa",
        description: "Uma breve descrição sobre a pesquisa trabalhada",
        status: [{}],
        participants: Array(87).fill(0),
        questions: Array(10).fill(0),
      },
    ]);
  }, []);

  function openSearchDetailsModal(search) {
    setSearchDetailModalIsOpent(true);
    setSearchToDetail(search);
  }

  const navigationItems = [
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
            makeSearch={handleFilterOnSearchs}
            nama="Search"
            placeholder="Procurar suas pesquisas"
            value={filter}
            setValue={setFilter}
          />
          <div className="searchs-item-container">
            {searchs.map((search, index) => {
              return (
                <AdministerSearchItem
                  key={index}
                  search={search}
                  openDetailModal={openSearchDetailsModal}
                />
              );
            })}
          </div>
          <PaginationInSearchs maxItems={40} itemsPerPage={4} />
        </>
      ) : (
        <SearchDetailsModal
          search={searchToDetail}
          closeModal={setSearchDetailModalIsOpent}
        />
      )}
    </>
  );
};

export default AdministerHome;
