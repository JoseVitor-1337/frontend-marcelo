import React, { memo } from "react";
import { NavigationItem } from "../";
import "./style.css";

const NavigationHeader = () => {
  return (
    <nav>
      <NavigationItem title="Sair" />
      <NavigationItem title="Outro nome" />
      <NavigationItem title="Alo Você" />
    </nav>
  );
};

export default memo(NavigationHeader);
