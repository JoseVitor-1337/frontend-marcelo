import React from "react";
import { NavigationHeader } from "../../components/Navigation";
import { SearchInput } from "../../components/Inputs";
import "./style.css";

const AdministerHome = () => {
  return (
    <>
      <NavigationHeader />
      <SearchInput />
    </>
  );
};

export default AdministerHome;
