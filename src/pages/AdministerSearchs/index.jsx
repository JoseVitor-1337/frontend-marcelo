import React, { useState } from "react";
import { NavigationHeader } from "../../components/Navigation";
import { SearchInput } from "../../components/Inputs";
import { Pagination } from "../../components/Paginations";
import { AdministerSearchItem } from "../../components/Search";
import { SearchDetailsModal } from "../../components/Modals";
import "./style.css";

const AdministerHome = () => {
  const [filter, setFilter] = useState(``);
  const [searchDetailModalIsOpent, setSearchDetailModalIsOpent] = useState(
    false
  );

  function openSearchDetailsModal() {
    if (searchDetailModalIsOpent === false) {
      setSearchDetailModalIsOpent(true);
    }
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
            nama="Search"
            placeholder="Procurar suas pesquisas"
            value={filter}
            setValue={setFilter}
          />
          <div className="searchs-item-container">
            <AdministerSearchItem openDetailModal={openSearchDetailsModal} />
            <AdministerSearchItem openDetailModal={openSearchDetailsModal} />
            <AdministerSearchItem openDetailModal={openSearchDetailsModal} />
            <AdministerSearchItem openDetailModal={openSearchDetailsModal} />
          </div>
          <Pagination maxItems={40} itemsPerPage={4} />
        </>
      ) : (
        <SearchDetailsModal closeModal={setSearchDetailModalIsOpent} />
      )}
    </>
  );
};

export default AdministerHome;
